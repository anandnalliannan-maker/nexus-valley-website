import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="panel max-w-2xl rounded-[2rem] p-10 text-center">
        <p className="section-title text-sm text-[var(--color-accent-soft)]">Page Not Found</p>
        <h1 className="mt-4 font-[family:var(--font-orbitron)] text-4xl font-semibold text-white">
          The page you are looking for does not exist.
        </h1>
        <p className="mt-5 leading-8 text-[var(--color-muted)]">
          Return to the main site and continue exploring Nexus Valley.
        </p>
        <Link
          href="/"
          className="hero-metal mt-8 inline-flex rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
