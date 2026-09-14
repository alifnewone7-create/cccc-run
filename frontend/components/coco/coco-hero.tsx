import Link from 'next/link'
import { ArrowRight, ChartCandlestick } from 'lucide-react'
import { CocoEngine } from '@/components/coco/coco-engine'
import { CocoHeroBg } from '@/components/coco/coco-hero-bg'

export function CocoHero() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24">
      <CocoHeroBg />
      <div className="relative mx-auto max-w-[1000px] px-4 pb-20 pt-8 text-center sm:px-6 sm:pb-24 sm:pt-10 lg:pb-28 lg:pt-12">
        <h1
          className="coco-display coco-title-gradient coco-rise mx-auto max-w-[18ch] text-balance text-[2.5rem] sm:text-[3.4rem] lg:text-[4.2rem]"
          style={{ '--d': '60ms' } as React.CSSProperties}
          data-testid="hero-heading"
        >
          The market never sleeps. Neither does{' '}
          <span className="coco-hero-word">
            <span className="coco-hero-word-text">Coco AI</span>
            <svg
              className="coco-hero-wave"
              viewBox="0 0 200 16"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cocoWaveGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff7ac8" />
                  <stop offset="45%" stopColor="#9b6bff" />
                  <stop offset="100%" stopColor="#3ecfff" />
                </linearGradient>
              </defs>
              <path
                d="M3 10 C 15 2, 27 2, 39 10 S 63 18, 75 10 S 99 2, 111 10 S 135 18, 147 10 S 171 2, 183 10 S 195 14, 197 11"
                fill="none"
                stroke="url(#cocoWaveGrad)"
                strokeWidth="3.4"
                strokeLinecap="round"
                opacity="0.55"
              />
              <path
                className="coco-hero-wave-shimmer"
                d="M3 10 C 15 2, 27 2, 39 10 S 63 18, 75 10 S 99 2, 111 10 S 135 18, 147 10 S 171 2, 183 10 S 195 14, 197 11"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeDasharray="34 220"
              />
            </svg>
          </span>
          .
        </h1>

        <p
          className="coco-rise mx-auto mt-6 max-w-[54ch] text-pretty text-sm leading-relaxed text-white/64 sm:text-base"
          style={{ '--d': '180ms' } as React.CSSProperties}
        >
          Coco AI reads price action, volume and momentum across OTC and real pairs, then hands you
          a clean, data driven call. No guesswork, no emotion, no missed windows.
        </p>

        <div
          className="coco-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ '--d': '250ms' } as React.CSSProperties}
        >
          <Link
            href="/login"
            className="coco-btn coco-btn-primary w-full sm:w-auto"
            data-testid="hero-cta-primary"
          >
            Launch Coco AI
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#pricing"
            className="coco-btn coco-btn-ghost w-full sm:w-auto"
            data-testid="hero-cta-secondary"
          >
            <ChartCandlestick className="h-4 w-4" />
            See access plans
          </a>
        </div>

        {/* Engine pipeline */}
        <div
          className="coco-rise relative mt-14"
          style={{ '--d': '330ms' } as React.CSSProperties}
          data-testid="hero-mockup"
        >
          <CocoEngine />
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(90,140,255,0.3),transparent)] blur-2xl" />
        </div>

      </div>
    </section>
  )
}
