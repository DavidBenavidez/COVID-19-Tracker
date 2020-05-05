export const getPercentage = function getPercentageForProgressbars(num, total) {
  const percentage = (num / total) * 100;
  return Math.ceil(percentage);
};

export const numberWithCommas = function convertNumberToCommasWithRegex(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
