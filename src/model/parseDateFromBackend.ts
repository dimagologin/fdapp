export function parseDateFromBackend(dateString: string) {
  const [datePart, timePart] = dateString.split(' ');

  const [year, month, day] = datePart.split('-').map(Number);
  const [hours, minutes, seconds] = timePart.split(':').map(Number);

  // Note: Month is 0-based in JavaScript Date, so subtract 1 from the month
  return new Date(year, month - 1, day, hours, minutes, seconds);
}


// Example usage:
// const dateStr = "2024-12-01 00:00:00";
// const dateObj = parseDateFromBackend(dateStr);
// console.log(dateObj);
