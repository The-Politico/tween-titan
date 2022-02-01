import getTweenPoints from './getTweenPoints';
import getRelativePercent from './getRelativePercent';

const interpolateStyles = ({ waypoints, percentage }) => {
  const points = getTweenPoints({ waypoints, percentage });
  const { interpolator } = points[0];

  const relativePercent = getRelativePercent({
    bounds: [points[0].percent, points[1].percent],
    percentage,
  });

  const results = interpolator(relativePercent);
  return results;
};

export default interpolateStyles;
