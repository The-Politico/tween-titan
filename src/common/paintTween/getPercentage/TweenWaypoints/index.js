const TweenWaypoints = (opts) => {
  const { viewportHeight, waypoints, margin = 0 } = opts;
  const { scrollY } = window;

  const firstYPos = waypoints[0].yPos;
  const lastYPos = waypoints[waypoints.length - 1].yPos;

  const percentage = ((scrollY + viewportHeight - margin) - firstYPos)
    / (lastYPos - firstYPos);

  return percentage;
};

export default TweenWaypoints;
