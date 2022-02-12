import removeListener from 'Common/removeListener';
import paintTween from 'Common/paintTween';
import getPositions from 'Common/getPositions';
import normalize from 'Common/normalize';
import convertNodesToPercents from 'Common/normalize/convertNodesToPercents';
import addScrollListener from 'Common/addListener/scroll';
import createInterpolators from './createInterpolators';

const refresh = (opts) => {
  const {
    mode,
    store,
    target,
    waypoints: rawWaypoints,
    margin,
    stepFunction,
    applyStyles,
  } = opts;

  const { scrollFunction } = store;
  if (scrollFunction) {
    removeListener('scroll', scrollFunction);
  }

  const { targetY, viewportHeight } = getPositions(target);

  const normalizedWaypoints = mode === 'TweenSelf'
    ? normalize(rawWaypoints)
    : convertNodesToPercents(rawWaypoints);

  const waypoints = createInterpolators(normalizedWaypoints);

  const newEvent = addScrollListener({
    mode,
    target,
    waypoints,
    margin,
    stepFunction,
    store,
    applyStyles,
  });

  paintTween({
    mode,
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
    stepFunction,
    store,
    applyStyles,
  });

  store.update('scrollFunction', newEvent);
};

export default refresh;
