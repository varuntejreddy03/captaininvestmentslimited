'use client';

import React, { useEffect, useState } from 'react';
import { getLusakaBusinessStatus, BusinessStatus } from '@/lib/hours';
import { Clock } from 'lucide-react';

interface LiveHoursBadgeProps {
  showTime?: boolean;
  className?: string;
}

export function LiveHoursBadge({ showTime = false, className = '' }: LiveHoursBadgeProps) {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    // Initial check
    setStatus(getLusakaBusinessStatus());

    // Update every minute to keep live accuracy
    const interval = setInterval(() => {
      setStatus(getLusakaBusinessStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 animate-pulse ${className}`}>
        <span className="w-2 h-2 rounded-full bg-slate-400" />
        <span>Checking Lusaka Office...</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
        status.isOpen
          ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
          : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
      } ${className}`}
      title={`Lusaka Local Time: ${status.currentLusakaTime}`}
    >
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
          }`}
        />
      </span>

      <span className="tracking-wide">
        {status.statusText}
      </span>

      {showTime && (
        <span className="hidden sm:inline-flex items-center gap-1 pl-1 border-l border-white/15 text-slate-300 font-mono text-[11px]">
          <Clock className="w-3 h-3 text-slate-400" />
          {status.currentLusakaTime}
        </span>
      )}
    </div>
  );
}
