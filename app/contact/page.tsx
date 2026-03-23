export default function ContactPage() {
  return (
    <div className="section-shell py-16 lg:py-24">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel rounded-[2rem] p-8">
          <p className="section-title text-sm text-[var(--color-accent-soft)]">Contact</p>
          <h1 className="mt-4 font-[family:var(--font-orbitron)] text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Start the conversation around your next digital build.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Whether you need a web platform, a mobile application, workflow automation, or a more tailored internal system, Nexus Valley is open to discussing the right solution.
          </p>

          <div className="mt-8 space-y-4 text-[var(--color-silver)]">
            <p>
              <span className="font-semibold text-white">Email:</span> info@nexusvalley.in
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span> Tamil Nadu, India
            </p>
            <p>
              <span className="font-semibold text-white">Focus:</span> Web apps, mobile apps, automation, Excel/VBA, and custom IT systems
            </p>
          </div>
        </div>

        <div className="panel rounded-[2rem] p-8">
          <form className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-[var(--color-line)] bg-white/6 px-4 py-4 text-base text-white outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                />
              </label>
              <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Email
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-2xl border border-[var(--color-line)] bg-white/6 px-4 py-4 text-base text-white outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Phone
              <input
                type="tel"
                placeholder="Your contact number"
                className="rounded-2xl border border-[var(--color-line)] bg-white/6 px-4 py-4 text-base text-white outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
              />
            </label>

            <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Project Brief
              <textarea
                rows={6}
                placeholder="Tell us about your requirement"
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/6 px-4 py-4 text-base text-white outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
              />
            </label>

            <button
              type="submit"
              className="hero-metal mt-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
