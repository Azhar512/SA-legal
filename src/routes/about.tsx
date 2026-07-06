import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, ShieldCheck, Wallet, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { PageHero, Reveal, Stagger, StaggerItem, Counter } from "../components/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SA Legal" },
      { name: "description", content: "SA Legal is a Queensland law firm rebuilding motor accident claims around the client — transparent, local, and no upfront cost." },
      { property: "og:title", content: "About — SA Legal" },
      { property: "og:description", content: "Why we started SA Legal, and the values that drive every claim we take on." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: MessageCircle, title: "Transparent, always", desc: "Clear pricing. Clear timelines. Plain English updates you can forward to your family." },
  { icon: Wallet, title: "No upfront cost", desc: "You pay when you win. We're aligned with your outcome, not our hourly rate." },
  { icon: MapPin, title: "Local QLD expertise", desc: "We know the QLD CTP scheme, the insurers, and the courts. This is all we do." },
  { icon: ShieldCheck, title: "Client-first communication", desc: "You get the lawyer's mobile. Not a case number." },
];

const team = [
  { name: "Michael Ferrera", role: "Principal Lawyer", bio: "12+ years across motor accident and personal injury claims in QLD." },
  { name: "Priya Sharma", role: "Senior Associate", bio: "Specialist in CTP injury claims and insurer negotiations." },
  { name: "Tom Whitfield", role: "Associate", bio: "Property damage claims and total loss valuation disputes." },
  { name: "Hannah Cole", role: "Claims Manager", bio: "Your day-to-day contact from first call to final payment." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>Built for the driver, <span className="text-primary">not the insurer.</span></>}
        subtitle="SA Legal was started to answer a simple question: why does recovering from a not-at-fault accident feel like a second accident? We rebuilt the process end-to-end."
      />

      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Our values</div>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Four things we won't compromise on.
              </h2>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-soft h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold text-ink">{v.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-y bg-tint">
        <div className="container-page">
          <Stagger className="grid gap-10 md:grid-cols-3">
            <StaggerItem>
              <div className="font-display text-5xl font-bold text-ink md:text-6xl">
                <Counter to={35} suffix="+" />
              </div>
              <div className="mt-2 text-sm text-ink-soft">Years combined experience</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-display text-5xl font-bold text-ink md:text-6xl">
                <Counter to={4200} suffix="+" />
              </div>
              <div className="mt-2 text-sm text-ink-soft">Claims resolved for Queenslanders</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-display text-5xl font-bold text-ink md:text-6xl">
                <Counter to={12} prefix="$" suffix="M+" />
              </div>
              <div className="mt-2 text-sm text-ink-soft">Recovered for our clients</div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Team</div>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                The people on your matter.
              </h2>
              <p className="mt-4 text-ink-soft">
                Photos are illustrative placeholders while we finalise team headshots.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group card-soft h-full">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-tint">
                    <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-primary/40 transition-transform duration-500 group-hover:scale-110">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div className="mt-6 font-display text-lg font-semibold text-ink group-hover:text-primary transition">
                    {m.name}
                  </div>
                  <div className="mt-0.5 text-sm text-primary">{m.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
                  <a href="#" aria-label={`${m.name} on LinkedIn`} className="mt-4 inline-flex items-center gap-1 text-sm text-ink-soft hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-y bg-tint">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Why we started</div>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                We watched too many drivers get run around.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  Every one of us has a family member or friend who's had a bingle,
                  been told it was "too small" to bother with, and ended up paying an
                  excess they never should have owed.
                </p>
                <p>
                  SA Legal exists so that never happens again — at least not in Queensland,
                  and not on our watch. If someone else caused the damage,
                  someone else should pay for it. Full stop.
                </p>
                <Link to="/contact" className="btn-primary mt-4">
                  Talk to a lawyer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
