import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Valley",
  description: "Architecting Technology for Your Business",
};

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "https://x.com/", label: "X" },
  { href: "https://www.facebook.com/", label: "Facebook" },
];

const whatsappLink = "https://wa.me/910000000000";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M6.8 8.9H3.6V20h3.2V8.9Zm.2-3.4A1.9 1.9 0 1 0 5 7.4a1.9 1.9 0 0 0 2-1.9ZM20.4 13.1c0-3.3-1.8-4.8-4.2-4.8-1.9 0-2.8 1.1-3.2 1.8V8.9h-3.1V20H13v-6c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2V20h3.2v-6.9Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M18.9 3H21l-4.6 5.2L22 21h-4.4l-3.5-4.8L9.8 21H7.7l4.9-5.6L2 3h4.5L9.7 7.5 13.6 3h2.1Zm-1.5 16h1.2L5.8 4.9H4.5L17.4 19Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M13.3 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.1H7V13h3v8h3.3Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5">
      <path
        fill="#25D366"
        d="M19.1 17.5c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.6.9c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.4-1.6-1.6-1.8-.2-.3 0-.4.1-.6l.4-.4c.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.8-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1.1 3 1.2 3.2c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.8.6.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.6-.3Z"
      />
      <path
        fill="#25D366"
        d="M16 3.2C9.2 3.2 3.7 8.7 3.7 15.5c0 2.2.6 4.3 1.7 6.2l-1.8 6.6 6.8-1.8c1.8 1 3.8 1.5 5.8 1.5 6.8 0 12.3-5.5 12.3-12.3S22.8 3.2 16 3.2Zm0 22.6c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4c-1-1.6-1.6-3.4-1.6-5.3 0-5.8 4.8-10.6 10.6-10.6s10.6 4.8 10.6 10.6S21.8 25.8 16 25.8Z"
      />
      <path
        fill="#fff"
        d="M24.6 15.5c0-4.7-3.8-8.6-8.6-8.6s-8.6 3.8-8.6 8.6c0 1.7.5 3.4 1.5 4.8l-.9 3.2 3.3-.9c1.4.9 3 1.4 4.7 1.4 4.7 0 8.6-3.8 8.6-8.5Zm-8.5 7.1c-1.5 0-3-.4-4.2-1.2l-.3-.2-2.4.7.7-2.3-.2-.3c-.8-1.3-1.3-2.8-1.3-4.3 0-4.2 3.4-7.6 7.7-7.6s7.7 3.4 7.7 7.6-3.5 7.6-7.7 7.6Z"
      />
      <path
        fill="#fff"
        d="M19.1 17.5c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.6.9c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.4-1.6-1.6-1.8-.2-.3 0-.4.1-.6l.4-.4c.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.8-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1.1 3 1.2 3.2c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.8.6.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.6-.3Z"
      />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Instagram":
      return <InstagramIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "X":
      return <XIcon />;
    case "Facebook":
      return <FacebookIcon />;
    default:
      return null;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="site-shell">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgba(6,16,28,0.76)] backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="logo-crop h-12 w-12 rounded-xl shadow-[0_0_25px_rgba(89,214,255,0.22)]">
                  <Image
                    src="/images/nexusvalleyicon.png"
                    alt="Nexus Valley icon"
                    width={220}
                    height={220}
                    className="logo-icon h-full w-full object-contain"
                    priority
                  />
                </div>
                <div>
                  <div className="font-[family:var(--font-orbitron)] text-lg font-semibold tracking-[0.24em] text-white">
                    NEXUS VALLEY
                  </div>
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Elite Technology Studio
                  </div>
                </div>
              </Link>

              <div className="hidden items-center gap-7 md:flex">
                <nav className="hidden items-center gap-8 md:flex">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)] transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/6 text-[var(--color-accent-soft)] transition hover:border-[var(--color-accent)] hover:text-white"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-white/10 bg-[color:rgba(4,10,20,0.94)]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.35fr_0.85fr_1.2fr] lg:px-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="logo-crop h-11 w-11 rounded-xl">
                    <Image
                      src="/images/nexusvalleyicon.png"
                      alt="Nexus Valley icon"
                      width={220}
                      height={220}
                      className="logo-icon h-full w-full object-contain"
                    />
                  </div>
                  <div className="font-[family:var(--font-orbitron)] text-base tracking-[0.22em] text-white">
                    NEXUS VALLEY
                  </div>
                </div>
                <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  Architecting technology for businesses that need sharper systems, cleaner execution, and scalable digital growth.
                </p>
              </div>

              <div>
                <h2 className="font-[family:var(--font-orbitron)] text-sm uppercase tracking-[0.24em] text-white">
                  Navigate
                </h2>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-[family:var(--font-orbitron)] text-sm uppercase tracking-[0.24em] text-white">
                  Connect
                </h2>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] transition hover:border-[var(--color-accent)] hover:text-white"
                    >
                      <SocialIcon label={item.label} />
                    </a>
                  ))}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] transition hover:border-[var(--color-accent)] hover:text-white"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 px-6 py-5 text-center text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Copyright {"\u00A9"} 2026 Nexus Valley. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
