import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StaggerItem, i as Stagger, n as PageHero, r as Reveal, t as Counter } from "./motion-primitives-Dwk2Dilj.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as MapPin, l as MessageCircle, o as ShieldCheck, p as Linkedin, r as Wallet, x as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Bh8--5eI.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		icon: MessageCircle,
		title: "Transparent, always",
		desc: "Clear pricing. Clear timelines. Plain English updates you can forward to your family."
	},
	{
		icon: Wallet,
		title: "No upfront cost",
		desc: "You pay when you win. We're aligned with your outcome, not our hourly rate."
	},
	{
		icon: MapPin,
		title: "Local QLD expertise",
		desc: "We know the QLD CTP scheme, the insurers, and the courts. This is all we do."
	},
	{
		icon: ShieldCheck,
		title: "Client-first communication",
		desc: "You get the lawyer's mobile. Not a case number."
	}
];
var team = [
	{
		name: "Michael Ferrera",
		role: "Principal Lawyer",
		bio: "12+ years across motor accident and personal injury claims in QLD."
	},
	{
		name: "Priya Sharma",
		role: "Senior Associate",
		bio: "Specialist in CTP injury claims and insurer negotiations."
	},
	{
		name: "Tom Whitfield",
		role: "Associate",
		bio: "Property damage claims and total loss valuation disputes."
	},
	{
		name: "Hannah Cole",
		role: "Claims Manager",
		bio: "Your day-to-day contact from first call to final payment."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our story",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built for the driver, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "not the insurer."
			})] }),
			subtitle: "SA Legal was started to answer a simple question: why does recovering from a not-at-fault accident feel like a second accident? We rebuilt the process end-to-end."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Our values"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
						children: "Four things we won't compromise on."
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 font-display text-lg font-semibold text-ink",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: v.desc
							})
						]
					}) }, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
					className: "grid gap-8 sm:gap-10 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl font-bold text-ink md:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 35,
								suffix: "+"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Years combined experience"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl font-bold text-ink md:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 4200,
								suffix: "+"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Claims resolved for Queenslanders"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl font-bold text-ink md:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 12,
								prefix: "$",
								suffix: "M+"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Recovered for our clients"
						})] })
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold uppercase tracking-wider text-primary",
							children: "Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
							children: "The people on your matter."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-soft",
							children: "Photos are illustrative placeholders while we finalise team headshots."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group card-soft h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-tint",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-primary/40 transition-transform duration-500 group-hover:scale-110",
									children: m.name.split(" ").map((n) => n[0]).join("")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 font-display text-lg font-semibold text-ink group-hover:text-primary transition",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-sm text-primary",
								children: m.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-soft",
								children: m.bio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": `${m.name} on LinkedIn`,
								className: "mt-4 inline-flex items-center gap-1 text-sm text-ink-soft hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
							})
						]
					}) }, m.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Why we started"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
						children: "We watched too many drivers get run around."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 text-lg leading-relaxed text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every one of us has a family member or friend who's had a bingle, been told it was \"too small\" to bother with, and ended up paying an excess they never should have owed." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SA Legal exists so that never happens again — at least not in Queensland, and not on our watch. If someone else caused the damage, someone else should pay for it. Full stop." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "btn-primary mt-4",
									children: ["Talk to a lawyer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})
					})]
				})
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
