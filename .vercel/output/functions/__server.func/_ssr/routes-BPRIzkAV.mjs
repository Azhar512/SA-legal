import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as StaggerItem, i as Stagger, r as Reveal, t as Counter } from "./motion-primitives-Dwk2Dilj.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, b as Car, c as Phone, h as Gavel, i as UserCheck, l as MessageCircle, m as HeartPulse, n as Wrench, o as ShieldCheck, r as Wallet, s as Scale, x as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPRIzkAV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		icon: Car,
		title: "Motor Vehicle Claims",
		desc: "Repairs, hire car and total loss recovery — handled end-to-end.",
		href: "/services"
	},
	{
		icon: HeartPulse,
		title: "CTP Injury Claims",
		desc: "Compensation for injuries under Queensland's CTP scheme, regardless of fault.",
		href: "/services"
	},
	{
		icon: Scale,
		title: "Insurance Disputes",
		desc: "When insurers deny, delay or underpay — we push back.",
		href: "/services"
	},
	{
		icon: Gavel,
		title: "General Litigation",
		desc: "Civil dispute support with a clear plan and clear pricing.",
		href: "/services"
	}
];
var whyUs = [
	{
		icon: Wallet,
		title: "No cost to you",
		desc: "No win, no fee. We're only paid when you're paid."
	},
	{
		icon: ShieldCheck,
		title: "Keep your insurance untouched",
		desc: "Recover directly from the at-fault party, not your insurer."
	},
	{
		icon: Wrench,
		title: "Choose your own repairer",
		desc: "Not the insurer's panel — the shop you trust."
	},
	{
		icon: UserCheck,
		title: "Direct lawyer access",
		desc: "A real lawyer on your matter — not a call centre."
	}
];
var steps = [
	{
		n: "01",
		title: "Tell us what happened",
		desc: "60-second online form or a quick call — no paperwork to start."
	},
	{
		n: "02",
		title: "We assess your claim",
		desc: "Fault, entitlements, likely outcome — in plain English."
	},
	{
		n: "03",
		title: "We handle the insurers",
		desc: "You get on with life. We do the chasing, negotiating and drafting."
	},
	{
		n: "04",
		title: "You get paid",
		desc: "Vehicle repaired, out-of-pockets refunded, compensation recovered."
	}
];
var testimonials = [
	{
		name: "Jess M.",
		suburb: "Paddington, QLD",
		quote: "Rear-ended on the M1. SA Legal had my car repaired, a hire car sorted, and lost wages back — I never spoke to the other driver's insurer once."
	},
	{
		name: "David T.",
		suburb: "South Bank, QLD",
		quote: "My insurer wanted to write my ute off. SA Legal pushed back and I got a proper payout and a hire car for the whole time."
	},
	{
		name: "Amelia R.",
		suburb: "New Farm, QLD",
		quote: "Genuinely made a horrible week feel manageable. Clear, fast, and no games about fees."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-32 pb-20 md:pt-52 md:pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blob left-[-10%] top-[-15%] h-[600px] w-[600px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "blob right-[-10%] top-[20%] h-[500px] w-[500px]",
				style: { animationDelay: "-8s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "blob left-[30%] bottom-[-30%] h-[500px] w-[500px]",
				style: {
					animationDelay: "-4s",
					opacity: .35
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Queensland motor accident lawyers"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[1.02]",
							children: ["Had an accident that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "wasn't your fault?"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl",
							children: "We recover your vehicle damage, hire car costs, lost income and CTP injury compensation — without touching your insurance, and at no upfront cost to you."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "btn-primary",
								children: ["Check if you qualify ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+61753000777",
								className: "btn-outline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call (07) 5300 0777"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 flex flex-wrap items-center gap-6 text-sm text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [
										[...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" }, i)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 font-medium text-ink",
											children: "5.0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "from 200+ Google reviews" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Regulated by the Queensland Law Society" })
							]
						})
					})
				]
			})
		]
	});
}
function StatStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-tint",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4",
				children: [
					{
						value: 12,
						prefix: "$",
						suffix: "M+",
						label: "Recovered for clients"
					},
					{
						value: 4200,
						suffix: "+",
						label: "Claims handled"
					},
					{
						value: 98,
						suffix: "%",
						label: "Success rate"
					},
					{
						value: 0,
						label: "Upfront cost to you",
						customValue: "$0"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
					children: s.customValue ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.value,
						prefix: s.prefix,
						suffix: s.suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-sm text-ink-soft",
					children: s.label
				})] }, i))
			})
		})
	});
}
function TrustBar() {
	const badges = [
		"Queensland Law Society",
		"★★★★★ Google 5.0",
		"No Win · No Fee",
		"QLD Owned & Operated",
		"AAMI · Allianz · SGIC accepted",
		"Member — Australian Lawyers Alliance"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-16 whitespace-nowrap px-6 text-sm font-medium text-ink-soft",
			children: [...badges, ...badges].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/60" }), b]
			}, i))
		})
	});
}
function ServicesPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
						children: "Every claim that comes with a bent bumper."
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "btn-outline",
						children: ["See all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: s.href,
					className: "card-soft block h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-xl font-semibold text-ink",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink-soft",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-1 text-sm font-semibold text-primary",
							children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}) }, s.title))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-tint",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Why SA Legal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
						children: "The legal team that actually makes this easy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg leading-relaxed text-ink-soft",
						children: "We built SA Legal for the driver who's just been hit and doesn't know where to start. No jargon, no invoices arriving mid-claim, no runaround."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-6 sm:grid-cols-2",
					children: whyUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 font-display text-lg font-semibold text-ink",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: w.desc
							})
						]
					}) }, w.title))
				})]
			})
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold uppercase tracking-wider text-primary",
					children: "How it works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
					children: "Four steps from crash to closed."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute left-0 top-8 hidden h-px bg-primary/30 md:block",
					initial: { width: 0 },
					whileInView: { width: "100%" },
					viewport: { once: true },
					transition: {
						duration: 1.2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-8 md:grid-cols-4",
					children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(59,91,255,0.35)] font-display text-xl font-bold text-primary ring-1 ring-primary/20",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 font-display text-lg font-semibold text-ink",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: s.desc
							})
						]
					}) }, s.n))
				})]
			})]
		})
	});
}
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
		return () => clearInterval(id);
	}, [paused]);
	const t = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-tint",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Results"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
						children: "Real Queenslanders. Real outcomes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-2 gap-4 sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-bold text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 12,
								prefix: "$",
								suffix: "M+"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-ink-soft",
							children: "Recovered for clients"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-bold text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 4200,
								suffix: "+"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-ink-soft",
							children: "Claims resolved"
						})] })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-3xl bg-white p-8 shadow-[0_30px_80px_-30px_rgba(59,91,255,0.3)] md:p-12",
					onMouseEnter: () => setPaused(true),
					onMouseLeave: () => setPaused(false),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-8 w-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -8
								},
								transition: { duration: .5 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 font-display text-2xl leading-snug text-ink md:text-3xl",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-ink",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-ink-soft",
										children: t.suburb
									})]
								})]
							}, i)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex gap-2",
							children: testimonials.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setI(idx),
								"aria-label": `Show testimonial ${idx + 1}`,
								className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-4 bg-border"}`
							}, idx))
						})
					]
				})]
			})
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center sm:px-8 sm:py-16 md:px-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl",
								children: "Ready to see what you're owed?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl text-lg text-primary-foreground/85",
								children: "Free, no-obligation claim check. We'll tell you in plain English whether it's worth pursuing — usually within one business day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition hover:scale-[1.03]",
									children: ["Start your free claim ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+61753000777",
									className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " (07) 5300 0777"]
								})]
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
export { HomePage as component };
