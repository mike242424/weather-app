export function nowToHHMM() {
  const currentDate = new Date();

  return `${currentDate.getHours()}:${currentDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}
