export function createAppointment(days: number, now: number | undefined = undefined): Date {
  const referenceDate = new Date(now ?? new Date());

  referenceDate.setDate(referenceDate.getDate() + days);

  return referenceDate;
}

export function getAppointmentTimestamp(appointmentDate: Date): string {
  return appointmentDate.toISOString();
}

export function getAppointmentDetails(timestamp: string): Record<'year' | 'month' | 'date' | 'hour' | 'minute', number> {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),   
    date: date.getDate(),     
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

export function updateAppointment(timestamp: string, options: Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>): Record<'year' | 'month' | 'date' | 'hour' | 'minute', number> {
  const date = new Date(timestamp);

  if (options.year !== undefined) date.setFullYear(options.year);
  if (options.month !== undefined) date.setMonth(options.month);
  if (options.date !== undefined) date.setDate(options.date);
  if (options.hour !== undefined) date.setHours(options.hour);
  if (options.minute !== undefined) date.setMinutes(options.minute);

  return getAppointmentDetails(date.toISOString());
}

export function timeBetween(timestampA: string, timestampB: string): number {
  const date1 = new Date(timestampA);
  const date2 = new Date(timestampB);

  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());

  return Math.round(diffInMilliseconds / 1000);
}

export function isValid(appointmentTimestamp: string, currentTimestamp: string): boolean {
  const appointmentDate = new Date(appointmentTimestamp);
  const currentDate = new Date(currentTimestamp);

  return appointmentDate > currentDate;
}

