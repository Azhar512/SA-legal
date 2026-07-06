import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Car,
  HeartPulse,
  Scale,
  Gavel,
  Wallet,
  UserCheck,
  Wrench,
  MessageCircle,
  Star,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, Counter } from "../components/motion-primitives";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SA Legal — Not-at-fault accident claims in Queensland" },
      { name: "description", content: "Had an accident that wasn't your fault? SA Legal recovers vehicle damage, hire car, lost income and CTP compensation. No upfront cost." },
      { property: "og:title", content: "SA Legal — Not-at-fault accident claims" },
      { property: "og:description", content: "Recover what you're owed after a not-at-fault motor vehicle accident in QLD. No win, no cost." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Car, title: "Motor Vehicle Claims", desc: "Repairs, hire car and total loss recovery — handled end-to-end.", href: "/services" },
  { icon: HeartPulse, title: "CTP Injury Claims", desc: "Compensation for injuries under Queensland's CTP scheme, regardless of fault.", href: "/services" },
  { icon: Scale, title: "Insurance Disputes", desc: "When insurers deny, delay or underpay — we push back.", href: "/services" },
  { icon: Gavel, title: "General Litigation", desc: "Civil dispute support with a clear plan and clear pricing.", href: "/services" },
];

const whyUs = [
  { icon: Wallet, title: "No cost to you", desc: "No win, no fee. We're only paid when you're paid." },
  { icon: ShieldCheck, title: "Keep your insurance untouched", desc: "Recover directly from the at-fault party, not your insurer." },
  { icon: Wrench, title: "Choose your own repairer", desc: "Not the insurer's panel — the shop you trust." },
  { icon: UserCheck, title: "Direct lawyer access", desc: "A real lawyer on your matter — not a call centre." },
];

const steps = [
  { n: "01", title: "Tell us what happened", desc: "60-second online form or a quick call — no paperwork to start." },
  { n: "02", title: "We assess your claim", desc: "Fault, entitlements, likely outcome — in plain English." },
  { n: "03", title: "We handle the insurers", desc: "You get on with life. We do the chasing, negotiating and drafting." },
  { n: "04", title: "You get paid", desc: "Vehicle repaired, out-of-pockets refunded, compensation recovered." },
];

const testimonials = [
  { name: "Jess M.", suburb: "Paddington, QLD", quote: "Rear-ended on the M1. SA Legal had my car repaired, a hire car sorted, and lost wages back — I never spoke to the other driver's insurer once." },
  { name: "David T.", suburb: "South Bank, QLD", quote: "My insurer wanted to write my ute off. SA Legal pushed back and I got a proper payout and a hire car for the whole time." },
  { name: "Amelia R.", suburb: "New Farm, QLD", quote: "Genuinely made a horrible week feel manageable. Clear, fast, and no games about fees." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <TrustBar />
      <ServicesPreview />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="blob left-[-10%] top-[-15%] h-[600px] w-[600px]" />
      <div className="blob right-[-10%] top-[20%] h-[500px] w-[500px]" style={{ animationDelay: "-8s" }} />
      <div className="blob left-[30%] bottom-[-30%] h-[500px] w-[500px]" style={{ animationDelay: "-4s", opacity: 0.35 }} />

      <div className="container-page relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Queensland motor accident lawyers
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-[80px]">
            Had an accident that <span className="text-primary">wasn't your fault?</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            We recover your vehicle damage, hire car costs, lost income and CTP injury
            compensation — without touching your insurance, and at no upfront cost to you.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Check if you qualify <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+61753000777" className="btn-outline">
              <Phone className="h-4 w-4" /> Call (07) 5300 0777
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-ink-soft">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-medium text-ink">5.0</span>
              <span>from 200+ Google reviews</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>Regulated by the Queensland Law Society</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatStrip() {
  const stats = [
    { value: 12, prefix: "$", suffix: "M+", label: "Recovered for clients" },
    { value: 4200, suffix: "+", label: "Claims handled" },
    { value: 98, suffix: "%", label: "Success rate" },
    { value: 0, label: "Upfront cost to you", customValue: "$0" },
  ];
  return (
    <section className="border-y border-border bg-tint">
      <div className="container-page py-14">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={i}>
              <div className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {s.customValue ?? (
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                )}
              </div>
              <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function TrustBar() {
  const badges = [
    "Queensland Law Society",
    "★★★★★ Google 5.0",
    "No Win · No Fee",
    "QLD Owned & Operated",
    "AAMI · Allianz · SGIC accepted",
    "Member — Australian Lawyers Alliance",
  ];
  const doubled = [...badges, ...badges];
  return (
    <section className="overflow-hidden py-10">
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap px-6 text-sm font-medium text-ink-soft">
        {doubled.map((b, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Services</div>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Every claim that comes with a bent bumper.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/services" className="btn-outline">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link to={s.href} className="card-soft block h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section-y bg-tint">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Why SA Legal</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              The legal team that actually makes this easy.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              We built SA Legal for the driver who's just been hit and doesn't know where
              to start. No jargon, no invoices arriving mid-claim, no runaround.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2">
            {whyUs.map((w) => (
              <StaggerItem key={w.title}>
                <div className="card-soft h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold text-ink">{w.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Four steps from crash to closed.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <motion.div
            className="absolute left-0 top-8 hidden h-px bg-primary/30 md:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <Stagger className="grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(59,91,255,0.35)] font-display text-xl font-bold text-primary ring-1 ring-primary/20">
                    {s.n}
                  </div>
                  <div className="mt-6 font-display text-lg font-semibold text-ink">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[i];

  return (
    <section className="section-y bg-tint">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Results</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Real Queenslanders. Real outcomes.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="font-display text-4xl font-bold text-ink">
                  <Counter to={12} prefix="$" suffix="M+" />
                </div>
                <div className="mt-1 text-sm text-ink-soft">Recovered for clients</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-ink">
                  <Counter to={4200} suffix="+" />
                </div>
                <div className="mt-1 text-sm text-ink-soft">Claims resolved</div>
              </div>
            </div>
          </Reveal>

          <div
            className="relative rounded-3xl bg-white p-8 shadow-[0_30px_80px_-30px_rgba(59,91,255,0.3)] md:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mt-6 font-display text-2xl leading-snug text-ink md:text-3xl">
                  "{t.quote}"
                </p>
                <div className="mt-8 text-sm">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-soft">{t.suburb}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
              Ready to see what you're owed?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/85">
              Free, no-obligation claim check. We'll tell you in plain English whether it's
              worth pursuing — usually within one business day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition hover:scale-[1.03]"
              >
                Start your free claim <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+61753000777"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> (07) 5300 0777
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
