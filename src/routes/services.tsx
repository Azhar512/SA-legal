import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, HeartPulse, Scale, Gavel, Check } from "lucide-react";
import { PageHero, Reveal, Stagger, StaggerItem } from "../components/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SA Legal" },
      { name: "description", content: "Motor vehicle claims, CTP injury claims, insurance disputes and civil litigation across Queensland. No win, no cost." },
      { property: "og:title", content: "Services — SA Legal" },
      { property: "og:description", content: "Everything we handle for Queensland drivers after a not-at-fault accident." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Car,
    id: "motor-vehicle",
    title: "Motor Vehicle Property Damage Claims",
    desc: "If someone else hit your car, you shouldn't be out of pocket. We recover repair costs, hire car, towing, storage, and any diminished value from the at-fault driver's insurer — without touching yours.",
    covered: ["Repairs at your choice of repairer", "Like-for-like hire car during repairs", "Total loss market value recovery", "Towing, storage & assessment fees", "Diminished value in appropriate cases"],
  },
  {
    icon: HeartPulse,
    id: "ctp",
    title: "CTP Injury Claims",
    desc: "Queensland's CTP scheme covers you for injuries in a motor vehicle accident — often regardless of fault. We handle the medicals, the reports, the insurer, and negotiate the payout that reflects your actual injury.",
    covered: ["Medical & treatment costs", "Past & future loss of income", "Pain and suffering (non-economic loss)", "Care & assistance costs", "Return-to-work planning"],
  },
  {
    icon: Scale,
    id: "insurance-disputes",
    title: "Insurance Disputes",
    desc: "When an insurer denies your claim, delays it for months, or offers a fraction of what you're owed — we step in. Most disputes we take on settle without going to court.",
    covered: ["Denied or reduced claims", "Delayed decisions & complaints", "Total loss valuation disputes", "AFCA complaint drafting", "Court proceedings if required"],
  },
  {
    icon: Gavel,
    id: "litigation",
    title: "General Litigation",
    desc: "Beyond motor claims, we take on civil disputes for Queensland individuals and small businesses — with clear pricing and a plan you can actually understand.",
    covered: ["Contract & commercial disputes", "Debt recovery", "Consumer law matters", "Property disputes", "Pre-litigation negotiation"],
  },
];

const faqs = [
  { q: "Will this actually cost me anything?", a: "No. We work on a no win, no cost basis for eligible motor vehicle and CTP claims. If we don't recover for you, you don't pay us." },
  { q: "Do I have to use my insurance?", a: "No. That's the whole point. We recover directly from the at-fault driver's insurer so your policy — and your premium at renewal — stay untouched." },
  { q: "How long does a claim take?", a: "Straightforward vehicle damage claims often resolve in 4–8 weeks. CTP injury claims depend on your recovery and can take months to a couple of years for the payout to reflect your full injury." },
  { q: "Am I eligible if I was partly at fault?", a: "Often yes — especially for CTP. Give us a 5-minute call and we'll tell you honestly." },
  { q: "I've already been dealing with the insurer for weeks. Too late?", a: "Almost never. We regularly step in mid-claim and reset the negotiation." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Every claim that comes with a <span className="text-primary">bent bumper.</span></>}
        subtitle="Four services, one focus: getting Queenslanders made whole after someone else's mistake."
      />

      <section className="pb-8">
        <div className="container-page">
          <div className="grid gap-3 rounded-2xl border border-border bg-white p-4 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition hover:bg-tint hover:text-ink"
              >
                <s.icon className="h-4 w-4 text-primary" />
                {s.title.split(" ").slice(0, 3).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page space-y-24">
          {services.map((s, idx) => (
            <Reveal key={s.id}>
              <div id={s.id} className="scroll-mt-28 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
                    0{idx + 1} · Service
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft">{s.desc}</p>
                  <Link to="/contact" className="btn-primary mt-8">
                    Start a claim <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-3xl bg-tint p-8 md:p-10">
                  <div className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                    What's covered
                  </div>
                  <ul className="mt-6 space-y-4">
                    {s.covered.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-ink">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-tint">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Answers, before you ask.
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              Still unsure? A five-minute call with us will save you an afternoon of
              Googling. It's free.
            </p>
          </Reveal>
          <Stagger>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <StaggerItem key={i}>
                  <AccordionItem value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-display text-lg font-semibold text-ink hover:text-primary hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-ink-soft">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </Stagger>
        </div>
      </section>
    </>
  );
}
