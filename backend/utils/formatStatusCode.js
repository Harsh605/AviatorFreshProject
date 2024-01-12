export function formatStatusCode(statusCode) {
  switch (statusCode) {
    case 0:
      return "pending";
    case 1:
      return "approved";
    case 2:
      return "rejected";
    default:
      return "unknown"; // or handle the case when the status code is not 0, 1, or 2
  }
}
