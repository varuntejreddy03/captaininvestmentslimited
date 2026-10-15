import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({ variant = 'horizontal', className = '', size = 'md' }: BrandLogoProps) {
  const dimensions = {
    sm: { img: 44, text: 'text-base', sub: 'text-[9px]' },
    md: { img: 56, text: 'text-xl', sub: 'text-[10px]' },
    lg: { img: 72, text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Captain Investments Limited - Home"
    >
      {/* Brand Emblem Mark - Clean transparent floating icon without boxed card */}
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo-mark.png"
          alt="Captain Investments Emblem"
          width={dimensions.img}
          height={dimensions.img}
          className="object-contain filter drop-shadow-[0_4px_12px_rgba(10,91,181,0.5)] group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-normal text-white group-hover:text-amber-400 transition-colors uppercase">
              Captain
            </span>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-normal text-amber-400 uppercase">
              Investments
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] text-slate-300 uppercase font-semibold">
              Limited
            </span>
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] text-sky-400 uppercase font-semibold">
              Lusaka, Zambia
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}

/**
 * BrandMotifSVG exported for lightweight vector renderings
 */
export function BrandMotifSVG({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B8FE0" />
          <stop offset="50%" stopColor="#0A5BB5" />
          <stop offset="100%" stopColor="#0A1F6B" />
        </linearGradient>
        <linearGradient id="augerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      <path
        d="M 85 25 C 50 15 20 40 20 65 C 20 95 60 98 85 90 C 70 85 40 80 40 65 C 40 50 65 35 85 25 Z"
        fill="url(#waveGrad)"
      />
      <path d="M 65 72 C 78 68 88 80 102 75 C 92 84 80 82 65 72 Z" fill="#3B8FE0" />
      <g>
        <rect x="57" y="28" width="6" height="12" rx="2" fill="#334155" />
        <path d="M 54 40 L 66 40 L 63 47 L 57 47 Z" fill="url(#augerGrad)" />
        <path d="M 53 49 L 67 49 L 62 56 L 58 56 Z" fill="url(#augerGrad)" />
        <path d="M 52 58 L 68 58 L 61 65 L 59 65 Z" fill="url(#augerGrad)" />
        <polygon points="60,74 53,67 67,67" fill="#F59E0B" />
      </g>
      <g>
        <rect x="25" y="98" width="70" height="14" rx="7" fill="#0B0B0B" stroke="#3B8FE0" strokeWidth="2" />
        <circle cx="36" cy="105" r="4" fill="#64748B" />
        <circle cx="50" cy="105" r="4" fill="#64748B" />
        <circle cx="64" cy="105" r="4" fill="#64748B" />
        <circle cx="78" cy="105" r="4" fill="#64748B" />
        <circle cx="91" cy="105" r="4" fill="#64748B" />
      </g>
    </svg>
  );
}
