const normalizeWaypoints = (waypoints) => {
  const properties = {};
  const normalizedWaypoints = [];

  // If some waypoints have properties that other waypoints don't,
  // let's add those properties to all waypoints consistently
  waypoints.forEach((waypoint) => {
    const { style } = waypoint;
    Object.entries(style).forEach(([key, value]) => {
      properties[key] = value;
    });

    normalizedWaypoints.push({
      ...waypoint,
      style: {
        ...properties,
      },
    });
  });

  // If the waypoints array doesn't start with percent=0, or doesn't
  // end with percent=1, add those values

  if (normalizedWaypoints[0].percent !== 0) {
    normalizedWaypoints.unshift({
      percent: 0,
      style: normalizedWaypoints[1].style,
    });
  }
  const endIndex = normalizedWaypoints.length - 1;
  if (normalizedWaypoints[endIndex].percent !== 1) {
    normalizedWaypoints.push({
      percent: 1,
      style: normalizedWaypoints[endIndex - 1].style,
    });
  }

  return normalizedWaypoints;
};

export default normalizeWaypoints;
