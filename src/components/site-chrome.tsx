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

  const isDarkHero = pathname === "/" && !scrolled;

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-0 md:px-4 md:top-6 transition-all duration-500"
    >
      <motion.div 
        layout
        className={`w-full max-w-7xl md:rounded-sm border-b md:border transition-all duration-700 ${
        scrolled
          ? "border-border/60 bg-white/95 backdrop-blur-md shadow-sm md:shadow-md"
          : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 md:px-10">
          <Link to="/" className={`flex items-center gap-1 font-display text-2xl font-bold tracking-tight relative group transition-colors duration-300 ${isDarkHero ? "text-white" : "text-primary"}`}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              SA Legal
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-accent inline-block"
            >
              .
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" onMouseLeave={() => setHoveredPath(null)}>
            {navItems.map((n, i) => {
              const isActive = pathname === n.to;
              const textColor = isDarkHero 
                ? (isActive || hoveredPath === n.to ? "text-white" : "text-white/70 hover:text-white")
                : (isActive || hoveredPath === n.to ? "text-primary" : "text-ink-soft hover:text-ink");
              
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onMouseEnter={() => setHoveredPath(n.to)}
                  className={`relative py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${textColor}`}
                  activeOptions={{ exact: true }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {n.label}
                  </motion.span>
                  
                  {hoveredPath === n.to && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hidden items-center gap-4 md:flex"
          >
            <a href="tel:+61753000777" className={`text-sm font-semibold transition-colors duration-300 ${isDarkHero ? "text-white hover:text-white/80" : "text-ink hover:text-primary"}`}>
              (07) 5300 0777
            </a>
            <Link to="/contact" className={`transition-colors duration-300 ${isDarkHero ? "btn-outline border-white/20 text-white hover:bg-white/10" : "btn-accent"} text-xs px-6 py-2.5 group`}>
              Start Your Free Claim
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <button
            className="md:hidden relative z-50 p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden border-t border-border bg-white overflow-hidden"
            >
              <div className="flex flex-col gap-0 px-6 py-4">
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
                      className="block border-b border-border/40 py-4 text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 flex flex-col gap-4 pb-6"
                >
                  <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent w-full justify-center py-4">
                    Start Your Free Claim
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+61753000777" className="btn-outline w-full justify-center py-4 text-primary border-primary hover:bg-primary hover:text-white">
                    <Phone className="h-4 w-4" /> Call (07) 5300 0777
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
    <footer className="border-t border-border bg-primary text-white">
      <div className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 max-w-sm">
            <Link to="/" className="font-display text-2xl font-bold text-white">
              SA Legal<span className="text-accent">.</span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/70 font-light">
              Queensland lawyers helping drivers recover after not-at-fault motor
              vehicle accidents. No upfront cost. No hassle.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">Navigate</div>
            <ul className="mt-6 space-y-3 text-sm text-white/80 font-light">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-accent transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</div>
            <ul className="mt-6 space-y-3 text-sm text-white/80 font-light">
              <li>PO Box 34</li>
              <li>ACACIA RIDGE QLD 4110</li>
              <li><a className="hover:text-accent transition-colors" href="tel:+61753000777">(07) 5300 0777</a></li>
              <li><a className="hover:text-accent transition-colors" href="mailto:info@salegal.com.au">info@salegal.com.au</a></li>
              <li className="pt-2 text-white/50">ABN: 67668790887</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/50 font-light md:flex-row">
          <div>© {new Date().getFullYear()} SA Legal. All rights reserved.</div>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        <p className="mt-6 text-[10px] uppercase tracking-wider leading-relaxed text-white/30">
          Liability limited by a scheme approved under Professional Standards Legislation.
          Information on this site is general only and not legal advice.
        </p>
      </div>
    </footer>
  );
}
