export function convertTimestampToMilliseconds(timestampString) {
  const millisecondsSinceEpoch = Date.parse(timestampString);
  return millisecondsSinceEpoch;
}
