export function millisecondsToDateString(milliseconds) {
  const dateObject = new Date(milliseconds);
  const dateString = dateObject.toISOString(); // ISO 8601 format

  return dateString;
}
