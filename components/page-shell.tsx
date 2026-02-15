import Image from "next/image";

interface PageShellProps {
  backgroundImage?: string;
  backgroundAlt?: string;
  children: React.ReactNode;
}

export function PageShell({
  backgroundImage,
  backgroundAlt = "Background",
  children,
}: PageShellProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background: image or gradient placeholder */}
      <div className="fixed inset-0 -z-10">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt={backgroundAlt}
              fill
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-background/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-background" />
        )}
      </div>

      {/* Content */}
      <main className="relative z-10 pt-28 pb-16 px-4">{children}</main>
    </div>
  );
}
