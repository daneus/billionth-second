const isLeapYear = (year) => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
};

const howManyDays = (monthNumber, year) => {
  const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
  const thirtyDays = [4, 6, 9, 11];

  if (thirtyOneDays.includes(monthNumber)) {
    return 31;
  } else if (thirtyDays.includes(monthNumber)) {
    return 30;
  } else if (monthNumber === 2) {
    if (isLeapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  }
};

export { howManyDays };
