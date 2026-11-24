'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { EASE_OUT, imageReveal, viewportOnce } from '@/lib/animations';

/* ==================================================================
   EDITORIAL PRIMITIVES
   Shared visual language for every page of the redesign.
   ================================================================== */

type Tone = 'dark' | 'light' | 'gold';

export function Eyebrow({
  children,
  tone = 'dark',
  className,
  centered = false,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  centered?: boolean;
}) {
  return (
    <span
      className={cn(
        'eyebrow',
        centered && 'eyebrow-center',
        tone === 'dark' && 'text-dark/55',
        tone === 'light' && 'text-cream/60',
        tone === 'gold' && 'text-gold-ink',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left',
  className,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={cn(
        'max-w-4xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          <Eyebrow tone={tone} centered={align === 'center'}>
            {eyebrow}
          </Eyebrow>
        </motion.div>
      ) : null}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
        className={cn(
          't-h2 mt-5 text-balance',
          tone === 'dark' ? 'text-dark' : 'text-cream',
          titleClassName,
        )}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className={cn(
            'body-lg mt-6 max-w-2xl',
            align === 'center' && 'mx-auto',
            tone === 'dark' ? 'text-dark/62' : 'text-cream/60',
            descriptionClassName,
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

type ActionVariant = 'gold' | 'cream' | 'outlineLight' | 'outlineDark';

const actionStyles: Record<ActionVariant, string> = {
  gold: 'bg-gold text-dark hover:bg-gold-light',
  cream: 'bg-cream text-dark hover:bg-white',
  outlineLight:
    'border border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-dark',
  outlineDark:
    'border border-dark/25 text-dark hover:border-dark hover:bg-dark hover:text-cream',
};

export function Action({
  children,
  href,
  onClick,
  variant = 'gold',
  className,
  icon = 'up',
  target,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ActionVariant;
  className?: string;
  icon?: 'up' | 'right' | 'none';
  target?: string;
  ariaLabel?: string;
}) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[10.5px] font-medium uppercase tracking-[0.2em] transition-all duration-500 btn-shine',
    actionStyles[variant],
    className,
  );

  const inner = (
    <>
      <span className="relative z-[2]">{children}</span>
      {icon === 'up' ? (
        <ArrowUpRight className="relative z-[2] size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : icon === 'right' ? (
        <ArrowRight className="relative z-[2] size-4 transition-transform duration-500 group-hover:translate-x-1" />
      ) : null}
    </>
  );

  if (href) {
    const external = href.startsWith('http');
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external || target
          ? {
              target: target ?? '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

export function ArrowLink({
  children,
  href,
  onClick,
  tone = 'dark',
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: Tone;
  className?: string;
}) {
  const classes = cn(
    'group inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.2em] transition-colors duration-400',
    tone === 'dark' && 'text-dark hover:text-burgundy',
    tone === 'light' && 'text-cream/80 hover:text-gold',
    tone === 'gold' && 'text-gold-ink hover:text-burgundy',
    className,
  );

  const inner = (
    <>
      <span className="border-b border-current/30 pb-1">{children}</span>
      <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}

export function Media({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  overlay = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  overlay?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn('group/media relative overflow-hidden bg-dark/5', className)}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn(
          'h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/media:scale-[1.035]',
          imgClassName,
        )}
      />
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark/75 via-dark/10 to-transparent" />
      ) : null}
    </div>
  );
}

/**
 * Masked image reveal.
 *
 * The IntersectionObserver lives on the *outer* wrapper because the inner
 * element starts fully clipped (`inset(0 0 100% 0)`), and a clipped element
 * reports an intersection ratio of 0 — which would stop `whileInView` from
 * ever firing and leave the image invisible.
 */
export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{ hidden: {}, visible: {} }}
      className={className}
    >
      <motion.div variants={imageReveal} className="h-full w-full">
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Cinematic page hero used by every inner page */
export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  meta,
  children,
  className,
  priority = true,
  align = 'left',
  imageClassName,
}: {
  image: string;
  alt: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  align?: 'left' | 'center';
  imageClassName?: string;
}) {
  return (
    <section
      className={cn(
        'relative isolate flex min-h-[72svh] items-end overflow-hidden bg-dark',
        className,
      )}
    >
      <motion.img
        src={image}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        initial={{ scale: 1.08, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE_OUT }}
        className={cn('absolute inset-0 -z-20 h-full w-full object-cover', imageClassName)}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/65 to-dark/25" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-dark/70 via-transparent to-transparent" />

      <div
        className={cn(
          'shell relative z-10 w-full pb-14 pt-40 md:pb-20',
          align === 'center' && 'text-center',
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
        >
          <Eyebrow tone="light" centered={align === 'center'}>
            {eyebrow}
          </Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.28, ease: EASE_OUT }}
          className={cn(
            't-h1 mt-6 max-w-5xl text-cream',
            align === 'center' && 'mx-auto',
          )}
        >
          {title}
        </motion.h1>

        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT }}
            className={cn(
              'body-lg mt-7 max-w-2xl text-cream/65',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </motion.p>
        ) : null}

        {meta ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE_OUT }}
            className="mt-10"
          >
            {meta}
          </motion.div>
        ) : null}

        {children}
      </div>
    </section>
  );
}

/** Small numbered marker used in editorial lists */
export function Index({ children, tone = 'dark' }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        'font-display text-sm tracking-[0.15em]',
        tone === 'dark' ? 'text-dark/35' : 'text-cream/35',
      )}
    >
      {children}
    </span>
  );
}

/** Oversized pull quote */
export function PullQuote({
  children,
  attribution,
  tone = 'dark',
  className,
}: {
  children: ReactNode;
  attribution?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <figure className={cn('max-w-4xl', className)}>
      <span
        aria-hidden
        className={cn(
          'font-display block text-5xl leading-none',
          tone === 'dark' ? 'text-gold-ink/40' : 'text-gold/40',
        )}
      >
        &ldquo;
      </span>
      <blockquote
        className={cn(
          't-quote mt-2 text-balance',
          tone === 'dark' ? 'text-dark' : 'text-cream',
        )}
      >
        {children}
      </blockquote>
      {attribution ? (
        <figcaption
          className={cn(
            'mt-6 text-[10.5px] font-medium uppercase tracking-[0.22em]',
            tone === 'dark' ? 'text-dark/50' : 'text-cream/50',
          )}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
