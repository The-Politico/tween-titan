import { interpolateObject } from 'd3-interpolate';

const createInterpolators = (waypoints) => waypoints
  .sort((a, b) => a.percent - b.percent)
  .map((point, i) => {
    const nextPoint = waypoints[i + 1];
    if (!nextPoint) {
      return point;
    }
    return {
      ...point,
      interpolator: interpolateObject(point.style, nextPoint.style),
    };
  });

export default createInterpolators;
