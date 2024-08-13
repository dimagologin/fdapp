export function parseDateTimeFromBackend(dateTimeString: string) {
  // Split the date and time parts
  const [datePart, timePart] = dateTimeString.split('T');

  // Split the date into year, month, and day
  const [year, month, day] = datePart.split('-').map(Number);

  // Split the time part into time and microseconds
  const [time, microsecondsPart] = timePart.split('.');

  // Split the time into hours, minutes, and seconds
  const [hours, minutes, seconds] = time.split(':').map(Number);

  // Extract the first 3 digits of the microsecondsPart for milliseconds
  const milliseconds = parseInt(microsecondsPart.slice(0, 3), 10);

  // Create a new Date object
  const date = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds, milliseconds));

  return date;
}

// Example usage:
// const dateStr = "2024-08-08T17:08:00.913948Z";
// const dateObj = parseDateTimeFromBackend(dateStr);
// console.log(dateObj);