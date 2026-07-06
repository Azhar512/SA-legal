import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-300">
      <div className={`w-full max-w-6xl rounded-full border px-6 md:px-8 transition-all duration-300 ${
        scrolled
          ? "border-border/50 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(59,91,255,0.25)]"
          : "border-transparent bg-transparent"
      }`}>
        <div className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-1 font-display text-xl font-bold tracking-tight text-ink">
          SA Legal<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg">
            Start Your Free Claim
          </Link>
        </div>

        <button
          className="md:hidden rounded-full border border-border p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-3xl border border-border bg-white shadow-2xl overflow-hidden">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white w-full shadow-md">
              Start Your Free Claim
            </Link>
            <a href="tel:+61753000777" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary w-full transition-colors hover:bg-primary/10">
              <Phone className="h-4 w-4" /> Call (07) 5300 0777
            </a>
          </div>
        </div>
      )}
      </div>
    </header>
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
