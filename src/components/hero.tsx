import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion-primitives";

interface HeroProps {
  pillText: string;
  title: React.ReactNode;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function Hero({
  pillText,
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0A0910] text-white">
      {/* Background glow and subtle diagonal lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/30 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.8)_50%,transparent_51%)] bg-[size:100px_100px]" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white mb-8 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                {pillText}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-sans text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl md:text-[72px]">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-white/70 font-light">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to={primaryButtonHref} className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-105">
                  {primaryButtonText}
                </Link>
                {secondaryButtonText && secondaryButtonHref && (
                  <Link to={secondaryButtonHref} className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent text-white px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10">
                    {secondaryButtonText}
                  </Link>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="relative flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-full max-w-lg aspect-square"
              animate={{ 
                y: [-15, 15, -15],
                rotateZ: [-3, 3, -3],
                rotateX: [-5, 5, -5],
                rotateY: [-5, 5, -5]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
               <img src="/hero-3d.png" alt="Abstract 3D Shape" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]" />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
