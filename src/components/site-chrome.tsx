import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-300"
    >
      <motion.div 
        layout
        className={`w-full max-w-6xl rounded-full border px-6 md:px-8 transition-colors duration-500 ${
        scrolled
          ? "border-border/50 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(59,91,255,0.25)]"
          : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-1 font-display text-xl font-bold tracking-tight text-ink relative group">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              SA Legal
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-primary inline-block"
            >
              .
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" onMouseLeave={() => setHoveredPath(null)}>
            {navItems.map((n, i) => {
              const isActive = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onMouseEnter={() => setHoveredPath(n.to)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive || hoveredPath === n.to ? "text-primary" : "text-ink-soft hover:text-ink"
                  }`}
                  activeOptions={{ exact: true }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="relative z-10"
                  >
                    {n.label}
                  </motion.span>
                  
                  {hoveredPath === n.to && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 z-0 rounded-full bg-primary/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden md:block relative group"
          >
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-30 blur transition duration-1000 group-hover:opacity-60 group-hover:duration-200"></div>
            <Link to="/contact" className="relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90">
              Start Your Free Claim
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <button
            className="md:hidden relative z-50 rounded-full border border-border p-2 bg-white/50 backdrop-blur-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }}>
              {open ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-20 left-4 right-4 rounded-3xl border border-border bg-white shadow-2xl overflow-hidden origin-top"
            >
              <div className="flex flex-col gap-2 p-6">
                {navItems.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-lg font-medium text-ink hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 flex flex-col gap-3"
                >
                  <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-white w-full shadow-md">
                    Start Your Free Claim
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a href="tel:+61753000777" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-4 text-base font-semibold text-primary w-full transition-colors hover:bg-primary/10">
                    <Phone className="h-5 w-5" /> Call (07) 5300 0777
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-tint">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 max-w-sm">
            <Link to="/" className="font-display text-xl font-bold text-ink">
              SA Legal<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Queensland lawyers helping drivers recover after not-at-fault motor
              vehicle accidents. No upfront cost. No hassle.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-primary">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>Unit 7/36 Achievement Cres</li>
              <li>Acacia Ridge QLD 4110, Australia</li>
              <li><a className="hover:text-primary" href="tel:+61753000777">(07) 5300 0777</a></li>
              <li><a className="hover:text-primary" href="mailto:info@salegal.com.au">info@salegal.com.au</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-ink-soft md:flex-row">
          <div>© {new Date().getFullYear()} SA Legal. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary">Terms</Link>
          </div>
        </div>
        <p className="mt-6 text-[11px] leading-relaxed text-ink-soft/80">
          Liability limited by a scheme approved under Professional Standards Legislation.
          Information on this site is general only and not legal advice.
        </p>
      </div>
    </footer>
  );
}
