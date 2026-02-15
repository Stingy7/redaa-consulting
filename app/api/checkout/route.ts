import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import Stripe from "stripe";
import { config as dotenvConfig } from "dotenv";

let envLoaded = false;
function loadEnvLocal() {
  if (envLoaded || process.env.STRIPE_SECRET_KEY) return;
  envLoaded = true;
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, ".env.local"),
    path.join(cwd, "Consulting", ".env.local"),
    path.resolve(cwd, "..", ".env.local"),
    path.resolve(cwd, "..", "Consulting", ".env.local"),
  ];
  for (const envPath of candidates) {
    if (fs.existsSync(envPath)) {
      const result = dotenvConfig({ path: envPath });
      if (result.error) {
        console.warn("[Stripe] .env.local load error:", result.error.message);
      }
      // Ensure parsed vars are on process.env (dotenv can miss in some runtimes)
      if (result.parsed?.STRIPE_SECRET_KEY) {
        process.env.STRIPE_SECRET_KEY = result.parsed.STRIPE_SECRET_KEY.trim().replace(/\r$/, "");
      }
      break;
    }
  }
}

function getStripe() {
  loadEnvLocal();
  let raw =
    process.env.STRIPE_SECRET_KEY ??
    process.env.STRIPE_SECRET ??
    "";
  if (!raw && typeof process.env === "object") {
    const stripeKey = Object.keys(process.env).find(
      (k) => k.includes("STRIPE") && k.includes("SECRET")
    );
    if (stripeKey) raw = (process.env as Record<string, string>)[stripeKey] ?? "";
  }
  const key = raw.replace(/^\uFEFF/, "").trim();
  if (!key || !key.startsWith("sk_")) return null;
  return new Stripe(key);
}

export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. In .env.local add: STRIPE_SECRET_KEY=sk_your_key (no spaces around =)",
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const amount = Number(body?.amount);

    if (!Number.isInteger(amount) || amount < 50) {
      return NextResponse.json(
        { error: "Invalid amount (minimum 50 cents)" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") ?? "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Consulting engagement",
              description: "Paid consulting — redaa.ca",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/pricing?success=1`,
      cancel_url: `${origin}/pricing?cancel=1`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("Checkout API error:", e);
    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}
