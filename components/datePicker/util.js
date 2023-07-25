export function formatDateToDesiredFormat(dateString) {
  const [month, day, year] = dateString.split("/");
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;
  return formattedDate;
}
