export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortenedMonths = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// simple Date helper for common date manipulation
// `shortened` is for shortened version of the months (ex. September to Sept)
// `capitalize` is for capitalizing all of the months text (ex. Sept to SEPT)
// both optional parameters

export const getMonthDayYear = (
  date,
  shortened = false,
  capitalize = false
) => {
  const day = date.getDate();
  const year = date.getFullYear();
  let month = shortened
    ? shortenedMonths[date.getMonth()]
    : months[date.getMonth()];
  month = capitalize ? month.toUpperCase() : month;
  return `${month} ${day}, ${year}`;
};

export const getMonthYear = (date, shortened = false, capitalize = false) => {
  const year = date.getFullYear();
  let month = shortened
    ? shortenedMonths[date.getMonth()]
    : months[date.getMonth()];
  month = capitalize ? month.toUpperCase() : month;
  return `${month} ${year}`;
};
