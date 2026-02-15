"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionLabel } from "@/components/section-label";

const MIN_CENTS = 500; // $5
const MAX_CENTS = 500000; // $5000

export function PricingForm() {
  const [amount, setAmount] = useState("10000"); // $100 default
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amountNum = parseInt(amount, 10) || 0;
  const amountCents = Math.round(amountNum * 100); // treat input as dollars
  const isValid =
    !Number.isNaN(amountCents) &&
    amountCents >= MIN_CENTS &&
    amountCents <= MAX_CENTS;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountCents }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel px-8 py-10 md:px-12 flex flex-col gap-6"
    >
      <SectionLabel label="Pay what you want" />
      <p className="text-muted-foreground text-sm">
        Discovery call is free. For paid engagements, choose an amount that
        works for you (minimum $5, maximum $5,000).
      </p>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-sm font-medium">
          Amount (USD)
        </label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">$</span>
          <Input
            id="amount"
            type="number"
            min={MIN_CENTS / 100}
            max={MAX_CENTS / 100}
            step={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="max-w-[140px]"
          />
        </div>
        {!isValid && amountNum > 0 && (
          <p className="text-sm text-destructive">
            Enter an amount between $5 and $5,000.
          </p>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" size="lg" disabled={!isValid || loading}>
        {loading ? "Redirecting…" : `Pay $${(amountCents / 100).toFixed(2)}`}
      </Button>
    </form>
  );
}
