import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero, Reveal, Stagger, StaggerItem } from "../components/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion } from "motion/react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SA Legal" },
      { name: "description", content: "Start your free, no-obligation claim assessment. Call SA Legal or send us the details of your accident." },
      { property: "og:title", content: "Contact — SA Legal" },
      { property: "og:description", content: "Get in touch with a Queensland motor accident lawyer." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "Will this cost me anything?", a: "No. Your initial claim assessment is free, and eligible motor and CTP claims run on a no win, no cost basis." },
  { q: "How quickly will you get back to me?", a: "Within one business day — usually the same day if you submit before 4pm AEST." },
  { q: "Do I need to have a police report?", a: "Not to talk to us. If it's needed for the claim, we'll walk you through getting one." },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to a lawyer"
        title={<>Free claim check. <span className="text-primary">One business day.</span></>}
        subtitle="Send us the basics and we'll come back with a plain-English view of whether it's worth pursuing — and what you'd likely recover."
      />

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.1}>
            <ClaimForm />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-tint">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Before you submit</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              A few quick answers.
            </h2>
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

function ContactInfo() {
  const items = [
    { icon: MapPin, label: "Office", value: "Unit 7/36 Achievement Cres\nAcacia Ridge QLD 4110, Australia" },
    { icon: Phone, label: "Phone", value: "(07) 5300 0777", href: "tel:+61753000777" },
    { icon: Mail, label: "Email", value: "info@salegal.com.au", href: "mailto:info@salegal.com.au" },
    { icon: Clock, label: "Hours", value: "Mon–Fri  ·  8:30am – 6:00pm AEST" },
  ];
  return (
    <div className="rounded-3xl border border-border bg-white p-8 md:p-10">
      <h2 className="font-display text-2xl font-bold text-ink">Get in touch</h2>
      <p className="mt-2 text-ink-soft">Two ways to reach a lawyer. Both are free.</p>

      <ul className="mt-8 space-y-6">
        {items.map((it) => (
          <li key={it.label} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                {it.label}
              </div>
              <div className="mt-1 whitespace-pre-line text-ink">
                {it.href ? (
                  <a href={it.href} className="hover:text-primary">{it.value}</a>
                ) : (
                  it.value
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-tint">
        <div className="flex h-full items-center justify-center text-sm text-ink-soft">
          Map placeholder — Acacia Ridge
        </div>
      </div>
    </div>
  );
}

function ClaimForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-3xl bg-primary p-10 text-center text-primary-foreground">
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <CheckCircle2 className="h-8 w-8" />
          </div>
        </motion.div>
        <h3 className="mt-6 font-display text-3xl font-bold">Thanks — we're on it.</h3>
        <p className="mt-3 max-w-md text-primary-foreground/85">
          A lawyer from SA Legal will review your details and be in touch within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary"
        >
          Submit another <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="rounded-3xl border border-border bg-white p-8 shadow-[0_30px_80px_-40px_rgba(59,91,255,0.35)] md:p-10"
    >
      <h2 className="font-display text-2xl font-bold text-ink">Start your free claim</h2>
      <p className="mt-2 text-ink-soft">Takes about 60 seconds. No obligation.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" className="sm:col-span-2" required />
        <Field label="Date of accident" name="date" type="date" />
        <Field label="Suburb" name="suburb" />
        <FieldArea label="Briefly, what happened?" name="details" className="sm:col-span-2" />
      </div>

      <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
        Send my claim details <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs text-ink-soft">
        By submitting you agree to be contacted by SA Legal about your enquiry.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", className, required,
}: { label: string; name: string; type?: string; className?: string; required?: boolean }) {
  return (
    <label className={`group block ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft transition-colors group-focus-within:text-primary">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </label>
  );
}

function FieldArea({ label, name, className }: { label: string; name: string; className?: string }) {
  return (
    <label className={`group block ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft transition-colors group-focus-within:text-primary">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        className="mt-2 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </label>
  );
}
