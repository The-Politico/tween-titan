import TweenSelf from './TweenSelf';
import TweenWaypoints from './TweenWaypoints';

const getPercentage = (opts) => {
  const { mode } = opts;

  if (mode === 'TweenWaypoints') {
    return TweenWaypoints(opts);
  }

  return TweenSelf(opts);
};

export default getPercentage;
