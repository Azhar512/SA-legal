import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as StaggerItem, i as Stagger, n as PageHero, r as Reveal } from "./motion-primitives-Dwk2Dilj.mjs";
import { _ as CircleCheck, c as Phone, d as MapPin, f as Mail, g as Clock, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-Bx5K-3-z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CngSas4H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "Will this cost me anything?",
		a: "No. Your initial claim assessment is free, and eligible motor and CTP claims run on a no win, no cost basis."
	},
	{
		q: "How quickly will you get back to me?",
		a: "Within one business day — usually the same day if you submit before 4pm AEST."
	},
	{
		q: "Do I need to have a police report?",
		a: "Not to talk to us. If it's needed for the claim, we'll walk you through getting one."
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Talk to a lawyer",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Free claim check. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "One business day."
			})] }),
			subtitle: "Send us the basics and we'll come back with a plain-English view of whether it's worth pursuing — and what you'd likely recover."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfo, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimForm, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold uppercase tracking-wider text-primary",
					children: "Before you submit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
					children: "A few quick answers."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
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
function ContactInfo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border bg-white p-8 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold text-ink",
				children: "Get in touch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink-soft",
				children: "Two ways to reach a lawyer. Both are free."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-6",
				children: [
					{
						icon: MapPin,
						label: "Office",
						value: "Unit 7/36 Achievement Cres\nAcacia Ridge QLD 4110, Australia"
					},
					{
						icon: Phone,
						label: "Phone",
						value: "(07) 5300 0777",
						href: "tel:+61753000777"
					},
					{
						icon: Mail,
						label: "Email",
						value: "info@salegal.com.au",
						href: "mailto:info@salegal.com.au"
					},
					{
						icon: Clock,
						label: "Hours",
						value: "Mon–Fri  ·  8:30am – 6:00pm AEST"
					}
				].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-ink-soft",
						children: it.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 whitespace-pre-line text-ink",
						children: it.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: it.href,
							className: "hover:text-primary",
							children: it.value
						}) : it.value
					})] })]
				}, it.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-tint",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full items-center justify-center text-sm text-ink-soft",
					children: "Map placeholder — Acacia Ridge"
				})
			})
		]
	});
}
function ClaimForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-[520px] flex-col items-center justify-center rounded-3xl bg-primary p-10 text-center text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .6,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: {
					type: "spring",
					stiffness: 220,
					damping: 18
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-display text-3xl font-bold",
				children: "Thanks — we're on it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-primary-foreground/85",
				children: "A lawyer from SA Legal will review your details and be in touch within one business day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setSubmitted(false),
				className: "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary",
				children: ["Submit another ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			setSubmitted(true);
		},
		className: "rounded-3xl border border-border bg-white p-8 shadow-[0_30px_80px_-40px_rgba(59,91,255,0.35)] md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold text-ink",
				children: "Start your free claim"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink-soft",
				children: "Takes about 60 seconds. No obligation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						name: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						className: "sm:col-span-2",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Date of accident",
						name: "date",
						type: "date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Suburb",
						name: "suburb"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldArea, {
						label: "Briefly, what happened?",
						name: "details",
						className: "sm:col-span-2"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "btn-primary mt-8 w-full sm:w-auto",
				children: ["Send my claim details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-ink-soft",
				children: "By submitting you agree to be contacted by SA Legal about your enquiry."
			})
		]
	});
}
function Field({ label, name, type = "text", className, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `group block ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs font-semibold uppercase tracking-wider text-ink-soft transition-colors group-focus-within:text-primary",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			required,
			className: "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
		})]
	});
}
function FieldArea({ label, name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `group block ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase tracking-wider text-ink-soft transition-colors group-focus-within:text-primary",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			rows: 4,
			className: "mt-2 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
		})]
	});
}
//#endregion
export { ContactPage as component };
