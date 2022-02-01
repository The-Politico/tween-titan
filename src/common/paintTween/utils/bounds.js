export default (rawPercentage) => {
  let percentage;
  if (rawPercentage < 0) {
    percentage = 0;
  } else if (rawPercentage > 1) {
    percentage = 1;
  } else {
    percentage = rawPercentage;
  }
  return percentage;
};
