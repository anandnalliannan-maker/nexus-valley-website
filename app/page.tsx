import Image from "next/image";
import Link from "next/link";

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
    title: "Excel Automation",
    description:
      "Excel and VBA solutions for reporting, reconciliation, data handling, and repetitive workflow automation.",
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
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="panel rounded-[2rem] p-8 lg:p-10">
            <p className="section-title text-sm text-[var(--color-accent-soft)]">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Technology that helps businesses operate with more clarity, speed, and control.
            </h2>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              Nexus Valley exists to make business operations more efficient through practical technology. The company focuses on enabling businesses with the right mix of digital tools, automation, and application solutions so they can work smarter, reduce friction, and scale with confidence.
            </p>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              The approach is straightforward: understand how the business works, identify where technology can create the most value, and deliver solutions that are clean, useful, and aligned to real operational needs.
            </p>
          </article>

          <article className="panel rounded-[2rem] p-8 lg:p-10">
            <p className="section-title text-sm text-[var(--color-accent-soft)]">Founder</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Anand Nalliannan</h3>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              Nexus Valley is founded by Anand Nalliannan, a technology professional with more than 12 years of experience across IT services, enterprise operations, automation, and application delivery.
            </p>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              His background includes roles with TCS, CTS, HCL, and Cable & Wireless Worldwide, along with exposure to global client environments such as British Airways, Wells Fargo, Vodafone, and Reed Exhibitions. Over the years, he has delivered automation initiatives, application development projects, and process improvements focused on business efficiency and execution quality.
            </p>
          </article>
        </div>
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
        <div className="hero-metal rounded-[2rem] px-8 py-10 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="section-title text-sm text-[#0b314d]">Contact</p>
              <h2 className="mt-4 font-[family:var(--font-orbitron)] text-3xl font-semibold tracking-[0.08em] sm:text-4xl">
                Let&apos;s discuss your next web, mobile, or automation project.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#163754]">
                Reach out to Nexus Valley for premium digital solutions aligned with your business goals.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[#8fa8c3] bg-[rgba(255,255,255,0.3)] px-6 py-6 text-[#0d2740] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
              <div className="space-y-3 text-base leading-7">
                <p>
                  <span className="font-semibold">Email:</span> info@nexusvalley.in
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Tamil Nadu, India
                </p>
                <p>
                  <span className="font-semibold">WhatsApp:</span> Update this with your active business number
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#0a2033] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#08192a]"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:info@nexusvalley.in"
                  className="rounded-full border border-[#47617b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2033] transition hover:bg-[rgba(10,32,51,0.08)]"
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
