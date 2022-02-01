import { interpolateObject } from 'd3-interpolate';
import sortAsc from 'Common/sortAsc';

const createInterpolators = (waypoints) => {
  waypoints.sort((a, b) => sortAsc({ a: a.percent, b: b.percent }));
  return waypoints.map((point, i) => {
    const nextPoint = waypoints[i + 1];
    if (!nextPoint) {
      return {
        ...point,
      };
    }
    return {
      ...point,
      interpolator: interpolateObject(point.style, nextPoint.style),
    };
  });
};

export default createInterpolators;
