import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home, Truck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-[#070D1E] text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <Image
            src="/images/logo-mark.png"
            alt="Captain Investments Emblem"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest">
            404 &bull; Page Not Located
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-black text-white">
            Off-Route Excavation
          </h1>
          <p className="text-sm text-slate-300">
            The page you are looking for has been moved or does not exist. Connect back with our Lusaka plant & borehole services below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/fleet"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all"
          >
            <Truck className="w-4 h-4 text-sky-400" />
            <span>View Fleet</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
          Need immediate dispatch? Call{' '}
          <a href={BUSINESS_INFO.telLink} className="text-amber-400 font-bold">
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
