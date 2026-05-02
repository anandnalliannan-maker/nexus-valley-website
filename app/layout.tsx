import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Valley",
  description: "Architecting Technology for Your Business",
  icons: {
    icon: "/images/nexusvalleyicon.png",
    shortcut: "/images/nexusvalleyicon.png",
    apple: "/images/nexusvalleyicon.png",
  },
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

const whatsappLink = "https://wa.me/917338841434";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="35%" stopColor="#fa7e1e" />
          <stop offset="65%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#instagram-gradient)" />
      <rect x="7" y="7" width="18" height="18" rx="5.5" fill="none" stroke="#fff" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="4.6" fill="none" stroke="#fff" strokeWidth="2.5" />
      <circle cx="22.6" cy="9.4" r="1.7" fill="#fff" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6">
      <rect width="32" height="32" rx="6" fill="#0a66c2" />
      <circle cx="10.2" cy="10.2" r="2.2" fill="#fff" />
      <rect x="8.1" y="13.1" width="4.2" height="10.8" fill="#fff" />
      <path
        fill="#fff"
        d="M15.6 13.1h4v1.5c.6-.9 1.8-1.9 3.7-1.9 3.9 0 4.7 2.6 4.7 6v5.2h-4.2v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.8h-4.2V13.1Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6">
      <rect width="32" height="32" rx="6" fill="#000" />
      <path
        fill="#fff"
        d="M20.9 6.7H24l-6.8 7.8 8 10.8h-6.3l-4.9-6.5-5.6 6.5H5.3l7.3-8.4-7.7-10.2h6.4l4.4 5.9 5.2-5.9Zm-1.1 16.8h1.7L10.3 8.4H8.5l11.3 15.1Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6">
      <circle cx="16" cy="16" r="16" fill="#1877f2" />
      <path
        fill="#fff"
        d="M18.1 26v-8.1h2.7l.4-3.1h-3.1v-2c0-.9.2-1.6 1.6-1.6h1.7V8.3c-.8-.1-1.7-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H13v3.1h2.7V26h2.4Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6">
      <path
        fill="#25D366"
        d="M16 2.8c-7.3 0-13.2 5.8-13.2 13 0 2.3.6 4.5 1.7 6.4l-1.9 7 7.2-1.9c1.8 1 3.9 1.5 6.1 1.5 7.2 0 13-5.8 13-13S23.2 2.8 16 2.8Z"
      />
      <path
        fill="#fff"
        d="M15.9 7.4c-4.6 0-8.3 3.7-8.3 8.3 0 1.5.4 3 1.2 4.3l-1 3.3 3.4-.9c1.3.8 2.8 1.2 4.3 1.2 4.6 0 8.3-3.7 8.3-8.3S20.5 7.4 15.9 7.4Zm4.8 11.1c-.2.5-1.2 1-1.7 1.1-.5.1-1 .2-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-4-4.6-4.1-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.3-.3.6-.3.8-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.2.4-.4.6l-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.1 1.3 2.4 1.4.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.7-.1.2.1 1.5.7 1.8.8.3.2.4.2.5.3.1.1.1.6-.1 1.1Z"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/8 transition hover:border-[var(--color-accent)] hover:scale-[1.04]"
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
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/4 transition hover:border-[var(--color-accent)] hover:bg-white/10"
                    >
                      <SocialIcon label={item.label} />
                    </a>
                  ))}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/4 transition hover:border-[var(--color-accent)] hover:bg-white/10"
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
