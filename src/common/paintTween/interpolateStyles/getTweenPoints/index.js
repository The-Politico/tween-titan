const getTweenPoints = ({ waypoints, percentage }) => {
  waypoints.sort((a, b) => a.percen - b.percent);

  let index;
  waypoints.forEach((point, i) => {
    const nextPoint = waypoints[i + 1];
    if (!nextPoint) {
      return;
    }
    if (percentage >= point.percent && percentage < nextPoint.percent) {
      index = i;
    }
  });

  if (index === undefined) {
    index = waypoints.length - 2;
  }

  return [waypoints[index], waypoints[index + 1]];
};

export default getTweenPoints;
