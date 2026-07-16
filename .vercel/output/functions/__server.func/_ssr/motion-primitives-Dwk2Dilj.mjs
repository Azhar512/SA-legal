import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/motion-primitives-Dwk2Dilj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 24, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Stagger({ children, className, gap = .09 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-60px"
		},
		variants: {
			hidden: {},
			show: { transition: { staggerChildren: gap } }
		},
		className,
		children
	});
}
function StaggerItem({ children, className, y = 20 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: {
			hidden: {
				opacity: 0,
				y
			},
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				}
			}
		},
		className,
		children
	});
}
function Counter({ to, prefix = "", suffix = "", duration = 2, decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let startTime;
		let animationFrame;
		const updateCounter = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / (duration * 1e3), 1);
			const current = (1 - Math.pow(1 - progress, 4)) * to;
			if (ref.current) ref.current.textContent = prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
			if (progress < 1) animationFrame = requestAnimationFrame(updateCounter);
			else if (ref.current) ref.current.textContent = prefix + to.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
		};
		animationFrame = requestAnimationFrame(updateCounter);
		return () => {
			if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	}, [
		inView,
		to,
		duration,
		prefix,
		suffix,
		decimals
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			"0",
			suffix
		]
	});
}
function PageHero({ eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blob left-[-10%] top-[-20%] h-[520px] w-[520px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "blob right-[-15%] top-[10%] h-[420px] w-[420px]",
				style: { animationDelay: "-6s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), eyebrow]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl",
							children: title
						})
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl",
							children: subtitle
						})
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children
						})
					})
				]
			})
		]
	});
}
//#endregion
export { StaggerItem as a, Stagger as i, PageHero as n, Reveal as r, Counter as t };
