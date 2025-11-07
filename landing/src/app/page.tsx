import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Protocols", href: "#protocols" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Results", href: "#results" },
  { label: "Studios", href: "#partners" },
];

const protocols = [
  {
    name: "Luminous Renewal System",
    description:
      "A three-phase resurfacing ritual balancing lactic ferment with encapsulated retinol for glass-skin clarity.",
    focus: "Brightening",
    price: "$236 kit",
  },
  {
    name: "Contour Sculpt Complex",
    description:
      "Peptide-forward sculpting protocol activating microcirculation and collagen expression in 14 days.",
    focus: "Firming",
    price: "$268 kit",
  },
  {
    name: "Ceramide Recovery Veil",
    description:
      "Dermal repair concentrates with phytoceramides and copper tripeptide to rebuild compromised barriers.",
    focus: "Barrier Repair",
    price: "$214 kit",
  },
];

const benefits = [
  {
    title: "Clinical Potency",
    detail: "Validated actives at peak thresholds with ISO-certified stability testing.",
  },
  {
    title: "Targeted Protocols",
    detail: "Modular layering designed for professional facial, body, and post-procedure menus.",
  },
  {
    title: "Education First",
    detail: "Live formulation labs, texture libraries, and client blueprint builders for your team.",
  },
];

const heroMetrics = [
  { value: "72h", label: "Fulfillment window" },
  { value: "35%", label: "Increase in glow index" },
  { value: "50+", label: "Active concentrate options" },
];

const clinicalMetrics = [
  { value: "97%", label: "Saw visible luminosity after one cycle" },
  { value: "4.8", label: "Professional partner rating" },
  { value: "2.4M", label: "Treatment-ready doses shipped" },
];

const testimonials = [
  {
    quote:
      "Aurelia delivers the kind of refinement my clients expect—textures are couture, results are clinical.",
    author: "Mira Takeda",
    role: "Lead Aesthetician, Onyx Atelier Spa",
  },
  {
    quote:
      "The education program transforms new hires into confident formulators. Our menu feels truly bespoke.",
    author: "Elena Rossi",
    role: "Director of Skincare, Lumina Clinics",
  },
];

const partners = [
  "Atelier Lune",
  "Velvet & Stone",
  "Arcadia Resorts",
  "Noir Meridian",
  "Forma Wellness",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[20%] top-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute left-[10%] top-48 h-96 w-96 rounded-full bg-accent-strong/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 rounded-full border border-white/40 bg-white/60 px-4 py-2 backdrop-blur">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
            Winter Radiance Collection
          </span>
          <Link
            href="#protocols"
            className="text-xs font-semibold tracking-wide text-foreground underline-offset-4 hover:underline"
          >
            Reserve Protocol Kits →
          </Link>
        </div>

        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Aurelia Laboratories logo" width={48} height={48} priority />
            <div>
              <p className="font-semibold tracking-wide text-foreground">Aurelia Laboratories</p>
              <p className="text-sm text-foreground/70">Professional Cosmetic Science</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#consult"
            className="hidden rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium tracking-wide text-foreground transition-all hover:border-transparent hover:bg-foreground hover:text-background md:inline-block"
          >
            Book Lab Briefing
          </Link>
        </header>

        <main className="flex flex-col gap-20">
          <section className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]" id="hero">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70 backdrop-blur">
                Salon Exclusive
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Clinical-grade skincare crafted for modern cosmetic ateliers.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                We engineer concentrated protocols that adapt to your treatment menu. From tactile
                emulsions to overnight actives, every texture is calibrated for visible, camera-ready
                transformation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#protocols"
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold tracking-wide text-background shadow-lg shadow-foreground/15 transition-transform hover:-translate-y-0.5"
                >
                  Explore Protocol Series
                </Link>
                <Link
                  href="#ingredients"
                  className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold tracking-wide text-foreground transition hover:border-foreground/40 hover:bg-white/70"
                >
                  Download Ingredient Deck
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/40 bg-white/70 px-4 py-5 text-center backdrop-blur"
                  >
                    <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground/60">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[2.25rem] bg-gradient-to-br from-accent/20 to-accent-strong/40 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/75 px-10 py-12 backdrop-blur">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                      Signature Concentrate
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-foreground">
                      Aurora Serum Nº5
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                      Microfluidic encapsulation locks in botanical retinoids with frost-fermented
                      vitamin C for unmatched glow and elasticity.
                    </p>
                  </div>
                  <div className="relative mx-auto h-48 w-48 rounded-full bg-gradient-to-br from-accent/40 via-white/70 to-accent-strong/30 shadow-[0_25px_120px_rgba(176,143,101,0.45)]">
                    <div className="absolute inset-3 rounded-full border border-white/60 bg-white/80" />
                    <div className="absolute inset-8 rounded-full bg-gradient-to-b from-white/85 via-accent/35 to-accent-strong/60" />
                    <div className="absolute left-1/2 top-6 h-28 w-12 -translate-x-1/2 rounded-full bg-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <span>0% synthetic fragrance</span>
                    <span>Dermatologist co-developed</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="protocols" className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                Protocol Architecture
              </p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Modular systems for every treatment room.
              </h2>
              <p className="max-w-2xl text-base text-foreground/70">
                Each protocol is hand-finished in small batches, calibrated for multi-layer sensory
                play, and pre-dosed for consistent performance across global studios.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {protocols.map((protocol) => (
                <article
                  key={protocol.name}
                  className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-[0_30px_80px_rgba(31,28,23,0.08)] backdrop-blur transition-transform hover:-translate-y-2"
                >
                  <div className="flex flex-col gap-4">
                    <span className="w-fit rounded-full border border-foreground/15 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-foreground/60">
                      {protocol.focus}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{protocol.name}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">
                      {protocol.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm font-semibold text-foreground">
                    <span>{protocol.price}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                      View Protocol →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="ingredients"
            className="grid gap-10 rounded-[2.5rem] border border-white/50 bg-white/70 p-10 backdrop-blur md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                Ingredient Methodology
              </p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Potent actives engineered for layered performance.
              </h2>
              <p className="text-base leading-relaxed text-foreground/70">
                We partner with regenerative farms and biotech labs to source molecularly pure
                constituents. Every concentrate is cold-compounded to maintain integrity and
                minimize sensitization.
              </p>
              <ul className="mt-2 grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
                <li className="rounded-2xl border border-foreground/10 bg-white/70 px-4 py-3">
                  <span className="block font-semibold text-foreground">Bioadaptive Ferments</span>
                  Grown in mineral waterfalls to stabilize microbiome resilience.
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-white/70 px-4 py-3">
                  <span className="block font-semibold text-foreground">Encapsulated Retinoids</span>
                  Triple-release delivery ensures zero daylight sensitivity.
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-white/70 px-4 py-3">
                  <span className="block font-semibold text-foreground">Peptide Meshes</span>
                  Copper tripeptide scaffold to lift and define facial contour.
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-white/70 px-4 py-3">
                  <span className="block font-semibold text-foreground">Phytoceramide Veils</span>
                  Barrier fortification that protects against clinical resurfacing.
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/90 via-white/40 to-accent/40 p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                  Signature Builds
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">The Aurelia Method</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Combine microdose resurfacing with adaptive hydration layers to create ritualized
                  luminosity without downtime. Designed for camera-ready reveals.
                </p>
              </div>
              <dl className="grid gap-4 text-sm text-foreground/70">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/70 p-4"
                  >
                    <span className="mt-1 h-7 w-7 rounded-full bg-accent/40 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                      •
                    </span>
                    <div>
                      <dt className="font-semibold text-foreground">{benefit.title}</dt>
                      <dd>{benefit.detail}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section id="results" className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/50 bg-white/70 p-8 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                Clinical Outcomes
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Precision-tested performance across diverse skin tones.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                Our dermatology board oversees every trial set, scoring luminosity, texture
                refinement, and barrier health across Fitzpatrick I–VI skin types.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {clinicalMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-foreground/10 bg-white/80 px-5 py-6 text-center shadow-[0_15px_60px_rgba(31,28,23,0.08)]"
                  >
                    <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground/60">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="rounded-[2rem] border border-white/50 bg-white/80 p-8 shadow-[0_20px_70px_rgba(31,28,23,0.08)] backdrop-blur"
                >
                  <p className="text-lg leading-relaxed text-foreground">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-foreground/50">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="partners"
            className="flex flex-col gap-8 rounded-[2.5rem] border border-white/50 bg-white/70 p-10 text-center backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
              Trusted by visionary spas worldwide
            </p>
            <div className="grid gap-6 text-lg font-semibold text-foreground/70 sm:grid-cols-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-2xl border border-foreground/10 bg-white/70 px-6 py-4 tracking-[0.2em]"
                >
                  {partner}
                </span>
              ))}
            </div>
          </section>

          <section
            id="consult"
            className="grid gap-10 rounded-[2.75rem] border border-white/50 bg-white/80 p-12 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                Partner with Aurelia
              </p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Curate a bespoke protocol library for your studio.
              </h2>
              <p className="text-base leading-relaxed text-foreground/70">
                Book a lab briefing to co-create signature rituals, align on treatment pricing, and
                access exclusive launch assets for your clientele.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-foreground/60">
                <span className="rounded-full border border-foreground/15 px-4 py-2">
                  Global fulfillment within 72 hours
                </span>
                <span className="rounded-full border border-foreground/15 px-4 py-2">
                  Dedicated educator onboarding
                </span>
                <span className="rounded-full border border-foreground/15 px-4 py-2">
                  Custom texture sampling kits
                </span>
              </div>
            </div>
            <form className="flex flex-col gap-5 rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_20px_80px_rgba(31,28,23,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Consultation Request
              </p>
              <label className="text-sm text-foreground/70">
                Contact Name
                <input
                  type="text"
                  placeholder="Full Name"
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-accent/40"
                />
              </label>
              <label className="text-sm text-foreground/70">
                Studio Email
                <input
                  type="email"
                  placeholder="hello@studioname.com"
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-accent/40"
                />
              </label>
              <label className="text-sm text-foreground/70">
                Focus Area
                <select
                  className="mt-2 w-full appearance-none rounded-xl border border-foreground/15 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-accent/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a primary goal
                  </option>
                  <option>Glow Ritual Launch</option>
                  <option>Barrier Reset Menu</option>
                  <option>Post-Procedure Recovery</option>
                  <option>Retail Expansion Strategy</option>
                </select>
              </label>
              <label className="text-sm text-foreground/70">
                Notes
                <textarea
                  rows={4}
                  placeholder="Tell us about your treatment philosophy…"
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-accent/40"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold tracking-wide text-background shadow-lg shadow-foreground/15 transition-transform hover:-translate-y-0.5"
              >
                Submit Partner Request
              </button>
              <p className="text-xs text-foreground/50">
                By submitting, you agree to receive launch updates, education invites, and lab
                dossiers from Aurelia Laboratories.
              </p>
            </form>
          </section>
        </main>

        <footer className="flex flex-col gap-6 border-t border-white/40 pt-8 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-wide text-foreground">Aurelia Laboratories</p>
            <p className="text-xs uppercase tracking-[0.3em]">Formulated for Professionals</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#hero" className="transition hover:text-foreground">
              Back to top
            </Link>
            <Link href="#protocols" className="transition hover:text-foreground">
              Protocols
            </Link>
            <Link href="#consult" className="transition hover:text-foreground">
              Partner Program
            </Link>
            <Link href="mailto:lab@aurelialabs.com" className="transition hover:text-foreground">
              lab@aurelialabs.com
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
