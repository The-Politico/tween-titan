const getTweenPoints = ({ waypoints, percentage }) => {
  waypoints.sort((a, b) => a.percent - b.percent);

  let index;
  waypoints.some((point, i) => {
    const nextPoint = waypoints[i + 1];
    if (!nextPoint) {
      return false;
    }
    if (percentage >= point.percent && percentage < nextPoint.percent) {
      index = i;
      return true;
    }
    return false;
  });

  if (index === undefined) {
    index = waypoints.length - 2;
  }

  return [waypoints[index], waypoints[index + 1]];
};

export default getTweenPoints;
