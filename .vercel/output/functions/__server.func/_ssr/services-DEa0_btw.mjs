import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StaggerItem, i as Stagger, n as PageHero, r as Reveal } from "./motion-primitives-Dwk2Dilj.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Car, h as Gavel, m as HeartPulse, s as Scale, x as ArrowRight, y as Check } from "../_libs/lucide-react.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-Bx5K-3-z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DEa0_btw.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		icon: Car,
		id: "motor-vehicle",
		title: "Motor Vehicle Property Damage Claims",
		desc: "If someone else hit your car, you shouldn't be out of pocket. We recover repair costs, hire car, towing, storage, and any diminished value from the at-fault driver's insurer — without touching yours.",
		covered: [
			"Repairs at your choice of repairer",
			"Like-for-like hire car during repairs",
			"Total loss market value recovery",
			"Towing, storage & assessment fees",
			"Diminished value in appropriate cases"
		]
	},
	{
		icon: HeartPulse,
		id: "ctp",
		title: "CTP Injury Claims",
		desc: "Queensland's CTP scheme covers you for injuries in a motor vehicle accident — often regardless of fault. We handle the medicals, the reports, the insurer, and negotiate the payout that reflects your actual injury.",
		covered: [
			"Medical & treatment costs",
			"Past & future loss of income",
			"Pain and suffering (non-economic loss)",
			"Care & assistance costs",
			"Return-to-work planning"
		]
	},
	{
		icon: Scale,
		id: "insurance-disputes",
		title: "Insurance Disputes",
		desc: "When an insurer denies your claim, delays it for months, or offers a fraction of what you're owed — we step in. Most disputes we take on settle without going to court.",
		covered: [
			"Denied or reduced claims",
			"Delayed decisions & complaints",
			"Total loss valuation disputes",
			"AFCA complaint drafting",
			"Court proceedings if required"
		]
	},
	{
		icon: Gavel,
		id: "litigation",
		title: "General Litigation",
		desc: "Beyond motor claims, we take on civil disputes for Queensland individuals and small businesses — with clear pricing and a plan you can actually understand.",
		covered: [
			"Contract & commercial disputes",
			"Debt recovery",
			"Consumer law matters",
			"Property disputes",
			"Pre-litigation negotiation"
		]
	}
];
var faqs = [
	{
		q: "Will this actually cost me anything?",
		a: "No. We work on a no win, no cost basis for eligible motor vehicle and CTP claims. If we don't recover for you, you don't pay us."
	},
	{
		q: "Do I have to use my insurance?",
		a: "No. That's the whole point. We recover directly from the at-fault driver's insurer so your policy — and your premium at renewal — stay untouched."
	},
	{
		q: "How long does a claim take?",
		a: "Straightforward vehicle damage claims often resolve in 4–8 weeks. CTP injury claims depend on your recovery and can take months to a couple of years for the payout to reflect your full injury."
	},
	{
		q: "Am I eligible if I was partly at fault?",
		a: "Often yes — especially for CTP. Give us a 5-minute call and we'll tell you honestly."
	},
	{
		q: "I've already been dealing with the insurer for weeks. Too late?",
		a: "Almost never. We regularly step in mid-claim and reset the negotiation."
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "What we do",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Every claim that comes with a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "bent bumper."
			})] }),
			subtitle: "Four services, one focus: getting Queenslanders made whole after someone else's mistake."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 rounded-2xl border border-border bg-white p-4 sm:grid-cols-2 md:grid-cols-4",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${s.id}`,
						className: "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition hover:bg-tint hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4 text-primary" }), s.title.split(" ").slice(0, 3).join(" ")]
					}, s.id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page space-y-24",
				children: services.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: s.id,
					className: "scroll-mt-28 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-sm font-semibold uppercase tracking-wider text-primary",
							children: [
								"0",
								idx + 1,
								" · Service"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-ink-soft",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "btn-primary mt-8",
							children: ["Start a claim ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-tint p-8 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold uppercase tracking-wider text-ink-soft",
							children: "What's covered"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-4",
							children: s.covered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-relaxed",
									children: c
								})]
							}, c))
						})]
					})]
				}) }, s.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
						children: "Answers, before you ask."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-ink-soft",
						children: "Still unsure? A five-minute call with us will save you an afternoon of Googling. It's free."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-display text-lg font-semibold text-ink hover:text-primary hover:no-underline",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-base leading-relaxed text-ink-soft",
							children: f.a
						})]
					}) }, i))
				}) })]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
