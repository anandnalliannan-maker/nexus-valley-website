export default function AboutPage() {
  return (
    <div className="section-shell py-16 lg:py-24">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel rounded-[2rem] p-8">
          <p className="section-title text-sm text-[var(--color-accent-soft)]">About Nexus Valley</p>
          <h1 className="mt-4 font-[family:var(--font-orbitron)] text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Built to help businesses operate with stronger digital foundations.
          </h1>
        </div>
        <div className="panel rounded-[2rem] p-8">
          <p className="text-lg leading-8 text-[var(--color-muted)]">
            Nexus Valley is a technology company focused on building intelligent, business-aligned digital solutions. The approach combines application development, automation thinking, and practical systems design to create outcomes that are clean, scalable, and operationally useful.
          </p>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            The goal is straightforward: help businesses replace inefficiency with smarter tools, sharper workflows, and solutions that support growth without unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="panel rounded-[2rem] p-8">
          <p className="section-title text-sm text-[var(--color-accent-soft)]">Mission</p>
          <p className="mt-4 text-xl leading-8 text-white">
            To architect technology that simplifies business operations, elevates productivity, and supports long-term scale.
          </p>
        </article>

        <article className="panel rounded-[2rem] p-8">
          <p className="section-title text-sm text-[var(--color-accent-soft)]">Vision</p>
          <p className="mt-4 text-xl leading-8 text-white">
            To become a trusted technology partner for businesses seeking premium digital execution with practical business value.
          </p>
        </article>
      </section>

      <section className="mt-10 panel rounded-[2rem] p-8 lg:p-10">
        <p className="section-title text-sm text-[var(--color-accent-soft)]">Founder</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Founder-led, execution-focused, and business-minded.</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--color-muted)]">
          <p>
            Nexus Valley is founded by a technology professional with more than a decade of experience in IT service management, incident management, operational process control, and business automation.
          </p>
          <p>
            With deep hands-on exposure to solving real business workflow challenges, the founder brings a practical approach to technology delivery. The emphasis is always on building solutions that improve clarity, reduce manual dependency, and support reliable execution.
          </p>
          <p>
            That foundation shapes how Nexus Valley works today: not as a generic software vendor, but as a focused partner for businesses that want usable technology with direct operational value.
          </p>
        </div>
      </section>
    </div>
  );
}
