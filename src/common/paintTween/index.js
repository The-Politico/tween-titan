import interpolateStyles from './interpolateStyles';
import getPercentage from './getPercentage';
import applyStyles from './applyStyles';
import bounds from './utils/bounds';

const paintTween = (opts) => {
  const {
    mode,
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
    stepFunction,
    store,
    applyStyles: applyStylesFlag,
  } = opts;

  const rawPercentage = getPercentage({
    mode, margin, viewportHeight, targetY, waypoints,
  });

  if (rawPercentage >= -0.3 && rawPercentage <= 1.3) {
    const percentage = bounds(rawPercentage);
    const style = interpolateStyles({ waypoints, percentage });

    store.update('style', style);
    if (applyStylesFlag) {
      applyStyles({ target, style });
    }

    if (stepFunction) {
      stepFunction(percentage, style, target);
    }
  }
};

export default paintTween;
