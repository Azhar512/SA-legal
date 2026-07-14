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
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0A0910] text-white">
      {/* Background glow and subtle diagonal lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/30 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.8)_50%,transparent_51%)] bg-[size:100px_100px]" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white mb-8 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Available for new claims
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-sans text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl md:text-[72px]">
                Transform your claim into compensation with us!
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-white/70 font-light">
                We're your partner in vehicle repairs, hire cars, and injury claims, 
                recovering what you're owed without touching your insurance.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-105">
                  Contact Us
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent text-white px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10">
                  Our services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
               <img src="/hero-3d.png" alt="Abstract 3D Shape" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
            </div>
          </Reveal>
        </div>
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
        <Stagger className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
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
    <section className="section-y bg-background">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-widest text-accent">Practice Areas</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Every claim that comes with a bent bumper.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/services" className="btn-outline">
              All Practice Areas
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link to={s.href} className="group block h-full border-t border-border pt-8 hover:border-accent transition-colors duration-500">
                <div className="text-accent mb-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <s.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft font-light">{s.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
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
    <section className="section-y bg-primary text-white">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Our Advantage</div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              The legal team that actually makes this easy.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80 font-light">
              We built SA Legal for the driver who's just been hit and doesn't know where
              to start. No jargon, no invoices arriving mid-claim, no runaround.
            </p>
          </Reveal>

          <Stagger className="grid gap-12 sm:grid-cols-2 border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-12">
            {whyUs.map((w) => (
              <StaggerItem key={w.title}>
                <div className="h-full">
                  <div className="text-accent mb-5">
                    <w.icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <div className="font-display text-xl font-semibold text-white">{w.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 font-light">{w.desc}</p>
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
    <section className="section-y bg-tint border-y border-border">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">How it works</div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Four steps from crash to closed.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 md:mt-24">
          <motion.div
            className="absolute left-0 top-12 hidden h-[1px] bg-border md:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <Stagger className="grid gap-12 md:gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center bg-background border border-border rounded-sm font-display text-3xl font-bold text-accent shadow-sm z-10 relative">
                    {s.n}
                  </div>
                  <div className="mt-8 font-display text-xl font-semibold text-ink">{s.title}</div>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">{s.desc}</p>
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
    <section className="section-y bg-background">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Results</div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Real Queenslanders. Real outcomes.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <div className="font-display text-5xl font-bold text-ink">
                  <Counter to={12} prefix="$" suffix="M+" />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-ink-soft">Recovered for clients</div>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-ink">
                  <Counter to={4200} suffix="+" />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-ink-soft">Claims resolved</div>
              </div>
            </div>
          </Reveal>

          <div
            className="relative border border-border bg-tint p-10 md:p-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <MessageCircle className="h-8 w-8 text-accent mb-8" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl italic">
                  "{t.quote}"
                </p>
                <div className="mt-10 text-sm">
                  <div className="font-semibold text-ink uppercase tracking-wider">{t.name}</div>
                  <div className="text-ink-soft mt-1">{t.suburb}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1 transition-all ${
                    idx === i ? "w-12 bg-accent" : "w-6 bg-border"
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
    <section className="section-y bg-tint">
      <div className="container-page">
        <div className="relative overflow-hidden bg-primary px-8 py-16 text-center sm:px-12 sm:py-20 md:px-20 md:py-32">
          {/* Elegant geometric line overlay instead of a blur */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto border border-white/10 p-12 md:p-20 bg-primary/80 backdrop-blur-sm">
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              Ready to see what you're owed?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 font-light">
              Free, no-obligation claim check. We'll tell you in plain English whether it's
              worth pursuing — usually within one business day.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="btn-accent w-full sm:w-auto"
              >
                Start your free claim <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="tel:+61753000777"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" /> (07) 5300 0777
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
