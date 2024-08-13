export function formatDateToBackend(dateTime: Date) {
  const padZero = (num: number, size = 2) => String(num).padStart(size, '0');

  const year = dateTime.getFullYear();
  const month = padZero(dateTime.getMonth() + 1); // Months are 0-based, so add 1
  const day = padZero(dateTime.getDate());

  const hours = padZero(dateTime.getHours());
  const minutes = padZero(dateTime.getMinutes());
  const seconds = padZero(dateTime.getSeconds());

  // Get milliseconds, convert to microseconds, and pad to 6 digits
  const microseconds = padZero(dateTime.getMilliseconds() * 1000, 6);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${microseconds}Z`;
}
