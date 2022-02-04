import getPositions from 'Common/getPositions';
import normalizeWaypoints from 'Common/normalize';

const calculateWaypoints = (waypoints) => {
  const pixelWaypoints = waypoints.map((waypoint) => {
    const { targetY } = getPositions(waypoint.elem);
    return {
      ...waypoint,
      yPos: targetY,
    };
  });

  pixelWaypoints.sort((a, b) => a.yPos - b.yPos);
  const firstYPos = pixelWaypoints[0].yPos;
  const lastYPos = pixelWaypoints[pixelWaypoints.length - 1].yPos;

  const percentWaypoints = pixelWaypoints.map((waypoint) => {
    const { yPos } = waypoint;
    return {
      ...waypoint,
      percent: (yPos - firstYPos) / (lastYPos - firstYPos),
    };
  });

  const normalizedWaypoints = normalizeWaypoints(percentWaypoints);

  return normalizedWaypoints;
};

export default calculateWaypoints;
