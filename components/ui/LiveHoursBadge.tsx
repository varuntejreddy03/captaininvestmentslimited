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
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-slate-100 border border-slate-200 text-slate-500 animate-pulse ${className}`}>
        <span className="w-2 h-2 rounded-full bg-slate-400" />
        <span>Checking Lusaka Office...</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap backdrop-blur-md transition-all duration-300 ${
        status.isOpen
          ? 'bg-emerald-50 border border-emerald-300 text-emerald-800 shadow-sm'
          : 'bg-amber-50 border border-amber-300 text-amber-900'
      } ${className}`}
      title={`Lusaka Local Time: ${status.currentLusakaTime}`}
    >
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
        />
      </span>

      <span className="tracking-wide">
        {status.statusText}
      </span>

      {showTime && (
        <span className="hidden sm:inline-flex items-center gap-1 pl-1.5 border-l border-slate-300 text-slate-600 font-mono text-[11px]">
          <Clock className="w-3 h-3 text-slate-500" />
          {status.currentLusakaTime}
        </span>
      )}
    </div>
  );
}
