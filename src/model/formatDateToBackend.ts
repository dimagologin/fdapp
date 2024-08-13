export function formatDateToBackend(date: Date) {
  const padZero = (num: number) => String(num).padStart(2, '0');

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1); // Months are 0-based, so add 1
  const day = padZero(date.getDate());

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}