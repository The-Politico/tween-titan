export default (rawPercentage) => {
  if (rawPercentage < 0) {
    return 0;
  } 
  
  if (rawPercentage > 1) {
    return 1;
  }
  
  return rawPercentage;
};
