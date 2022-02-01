const getRelativePercent = ({
  bounds,
  percentage,
}) => (percentage - bounds[0]) / (bounds[1] - bounds[0]);

export default getRelativePercent;
