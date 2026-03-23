const services = [
  {
    title: "Web App Development",
    description:
      "Custom web platforms for operations, management, reporting, internal workflows, and customer-facing digital experiences. Each build is designed around clean usability, strong performance, and scalable architecture.",
  },
  {
    title: "Mobile App Development",
    description:
      "Android and iOS applications that combine practical business utility with polished user experience. Suitable for customer apps, service platforms, delivery workflows, and internal operational tools.",
  },
  {
    title: "Business Automation",
    description:
      "Automation systems that reduce repetitive tasks, remove manual friction, and tighten process flow across teams. Ideal for organizations that want faster execution and fewer operational bottlenecks.",
  },
  {
    title: "Excel and VBA Automation",
    description:
      "Advanced spreadsheet tools, dashboards, macros, and VBA-driven process systems for reporting, reconciliation, data movement, validation, and business control workflows.",
  },
  {
    title: "Custom IT Solutions",
    description:
      "Tailored digital solutions for business-specific requirements that are not solved well by off-the-shelf software. The focus stays on fit, usability, and long-term maintainability.",
  },
];

export default function ServicesPage() {
  return (
    <div className="section-shell py-16 lg:py-24">
      <section className="mb-10 space-y-6">
        <p className="section-title text-sm text-[var(--color-accent-soft)]">Services</p>
        <h1 className="max-w-4xl font-[family:var(--font-orbitron)] text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Technology services built around business clarity, workflow efficiency, and durable execution.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
          Nexus Valley delivers selected high-value services where design quality, operational usefulness, and implementation discipline matter. The work is tailored, not template-driven.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="panel rounded-[1.8rem] p-7">
            <div className="mb-5 h-12 w-12 rounded-2xl border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(89,214,255,0.18),rgba(255,255,255,0.02))]" />
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-4 leading-8 text-[var(--color-muted)]">{service.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
