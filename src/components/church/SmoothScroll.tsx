'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

/**
 * Premium smooth scrolling with Lenis.
 * - Respects prefers-reduced-motion (does nothing when reduced motion is on).
 * - Keeps anchor links working with a nav-height offset.
 * - Resets scroll on client-side route changes.
 * - Leaves native touch scrolling intact.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      syncTouch: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const el = document.querySelector(hash);
      if (!el) return;

      event.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -96, duration: 1.2 });
      window.history.pushState(null, '', hash);
    };

    document.addEventListener('click', onAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Restore the top of the page on navigation, without fighting the browser.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduce ? 'auto' : 'auto' });
  }, [pathname]);

  return null;
}
