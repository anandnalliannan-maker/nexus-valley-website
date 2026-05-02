import Image from "next/image";
import Link from "next/link";

const whatsappLink = "https://wa.me/917338841434";

const services = [
  {
    title: "Web App Development",
    description:
      "Business-ready web applications for operations, workflow management, dashboards, and customer-facing platforms.",
  },
  {
    title: "Mobile App Development",
    description:
      "Android and iOS mobile applications built for usability, performance, and practical business outcomes.",
  },
  {
    title: "Website Design",
    description:
      "Premium websites designed to present your brand clearly, build trust, and convert business enquiries.",
  },
  {
    title: "SaaS Product Development",
    description:
      "Business-focused SaaS products designed to solve everyday operational challenges, streamline workflows, and improve efficiency across industries.",
  },
  {
    title: "Reporting and Automation (RPA)",
    description:
      "Reporting and automation solutions for reconciliation, data handling, process efficiency, and repetitive workflow execution.",
  },
  {
    title: "Custom IT Solutions",
    description:
      "Tailored digital solutions for business-specific requirements where standard tools are not enough.",
  },
];

export default function Home() {
  return (
    <div className="pb-16">
      <section id="home" className="section-shell pt-14 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-7 pt-2">
            <div className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
              Premium Digital Execution for Modern Businesses
            </div>

            <div className="space-y-5">
              <h1 className="text-balance font-[family:var(--font-orbitron)] text-4xl leading-[1.02] font-semibold text-white sm:text-5xl lg:text-7xl">
                Architecting technology for your business.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                Nexus Valley designs sharp digital solutions for businesses that need clarity, speed, and scalable execution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="hero-metal rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition hover:scale-[1.02]"
              >
                Start a Project
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-[var(--color-line)] bg-white/6 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[var(--color-accent)] hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="panel glow-ring relative self-start overflow-hidden rounded-[2rem] p-5 lg:mt-2 lg:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,214,255,0.24),transparent_32%)]" />
            <div className="relative rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,19,31,0.82),rgba(9,26,42,0.94))] p-5">
              <Image
                src="/images/nexus-valley-logo.png"
                alt="Nexus Valley"
                width={900}
                height={900}
                className="w-full rounded-[1.2rem] object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell scroll-mt-28 py-14">
        <div className="mb-10 flex flex-col gap-3">
          <p className="section-title text-sm text-[var(--color-accent-soft)]">Services</p>
          <h2 className="max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
            Selected capabilities for businesses that need polished delivery.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="space-y-3">
              <div className="panel rounded-[1.8rem] px-6 py-6">
                <h3 className="section-title text-base text-[var(--color-silver)]">{service.title}</h3>
              </div>
              <p className="rounded-[1.4rem] border border-white/6 bg-[rgba(255,255,255,0.03)] px-5 py-5 leading-7 text-[var(--color-muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-28 py-14">
        <article className="panel rounded-[2rem] p-8 lg:p-10">
          <p className="section-title text-sm text-[var(--color-accent-soft)]">About</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
            Technology that helps businesses operate with more clarity, speed, and control.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-[var(--color-muted)]">
            Nexus Valley exists to make business operations more efficient through practical technology. The company focuses on enabling businesses with the right mix of digital tools, automation, reporting, and application solutions so they can work smarter, reduce friction, and scale with confidence.
          </p>
          <p className="mt-5 max-w-4xl leading-8 text-[var(--color-muted)]">
            The approach is straightforward: understand how the business works, identify where technology can create the most value, and deliver solutions that are clean, useful, and aligned to real operational needs.
          </p>
        </article>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Precision Engineering",
              text: "Structured delivery with attention to usability, maintainability, and real business context.",
            },
            {
              title: "Automation Mindset",
              text: "A focus on reducing manual work, simplifying workflows, and improving execution speed.",
            },
            {
              title: "Business Alignment",
              text: "Solutions shaped around practical value, not unnecessary technical complexity.",
            },
          ].map((item) => (
            <article key={item.title} className="panel rounded-[1.75rem] p-7">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell scroll-mt-28 py-14">
        <div className="hero-metal overflow-hidden rounded-[2rem] px-5 py-8 sm:px-7 sm:py-9 lg:px-12 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-8">
            <div>
              <p className="section-title text-sm text-[#0b314d]">Contact</p>
              <h2 className="mt-4 max-w-3xl font-[family:var(--font-orbitron)] text-3xl leading-[1.18] font-semibold tracking-[0.06em] sm:text-4xl sm:leading-[1.16]">
                Let&apos;s discuss your next web, mobile, or automation project.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#163754] sm:text-lg">
                Reach out to Nexus Valley for premium digital solutions aligned with your business goals.
              </p>
            </div>

            <div className="w-full max-w-full rounded-[1.8rem] border border-[#8fa8c3] bg-[rgba(255,255,255,0.3)] px-5 py-5 text-[#0d2740] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] sm:px-6 sm:py-6">
              <div className="space-y-3 text-base leading-7 break-words">
                <p>
                  <span className="font-semibold">Email:</span> support@nexusvalley.in
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 9/443-3, Pari Nagar Extension
                  <br />
                  CAK Road
                  <br />
                  Karur - 639002
                  <br />
                  Tamil Nadu, India
                </p>
                <p>
                  <span className="font-semibold">WhatsApp:</span> +91 7338841434
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#0a2033] bg-[#0a2033] px-6 py-3 text-center text-sm font-extrabold uppercase tracking-[0.14em] !text-white shadow-[0_10px_25px_rgba(10,32,51,0.22)] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] transition hover:bg-[#08192a] sm:w-auto sm:min-w-[17rem]"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:support@nexusvalley.in"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#47617b] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#0a2033] transition hover:bg-[rgba(10,32,51,0.08)] sm:w-auto"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
