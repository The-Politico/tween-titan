import getPositions from 'Common/getPositions';
import sortAsc from 'Common/sortAsc';
import normalizeWaypoints from 'Common/normalize';

const calculateWaypoints = (waypoints) => {
  const pixelWaypoints = waypoints.map((waypoint) => {
    const { targetY } = getPositions(waypoint.elem);
    return {
      ...waypoint,
      yPos: targetY,
    };
  });

  pixelWaypoints.sort((a, b) => sortAsc({ a: a.yPos, b: b.yPos }));
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
