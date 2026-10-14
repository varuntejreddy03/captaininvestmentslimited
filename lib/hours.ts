/**
 * Lusaka Time & Business Hours Utility
 * Evaluates live office status according to Africa/Lusaka (Central Africa Time, UTC+2).
 * Schedule: Monday to Saturday, 08:00 to 17:00. Sunday closed.
 */

export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentLusakaTime: string;
  isSunday: boolean;
  closingSoon: boolean;
}

export function getLusakaBusinessStatus(): BusinessStatus {
  const now = new Date();

  // Format date and time specifically in Africa/Lusaka timezone
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Lusaka',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = dtf.formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')?.value || '';
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

  const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  const displayTime = `${formattedTime} CAT (Lusaka)`;

  const isSunday = weekday === 'Sun';
  const isWorkday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].includes(weekday);

  // Business hours: 08:00 to 17:00
  const currentMinutes = hour * 60 + minute;
  const openMinutes = 8 * 60; // 08:00
  const closeMinutes = 17 * 60; // 17:00

  const isOpen = isWorkday && currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  const closingSoon = isOpen && (closeMinutes - currentMinutes) <= 60;

  let statusText = 'Closed Now';
  let subText = 'Opens 08:00 (Mon–Sat)';

  if (isOpen) {
    if (closingSoon) {
      const minsLeft = closeMinutes - currentMinutes;
      statusText = `Open Now • Closes in ${minsLeft}m`;
      subText = `Work hours end at 17:00 CAT`;
    } else {
      statusText = 'Open Now';
      subText = 'Available for dispatch & quotes (Closes 17:00)';
    }
  } else {
    if (isSunday) {
      statusText = 'Closed Today (Sunday)';
      subText = 'Resumes Monday at 08:00 CAT';
    } else if (currentMinutes < openMinutes) {
      statusText = 'Closed Now';
      subText = 'Opens today at 08:00 CAT';
    } else {
      if (weekday === 'Sat') {
        statusText = 'Closed for the weekend';
        subText = 'Resumes Monday at 08:00 CAT';
      } else {
        statusText = 'Closed for the evening';
        subText = 'Reopens tomorrow at 08:00 CAT';
      }
    }
  }

  return {
    isOpen,
    statusText,
    subText,
    currentLusakaTime: displayTime,
    isSunday,
    closingSoon,
  };
}
