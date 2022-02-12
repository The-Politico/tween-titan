import { throttle } from 'lodash';
import SCROLL_THROTTLE_THRESHOLD from 'Constants/main';
import getPositions from 'Common/getPositions';
import paintTween from 'Common/paintTween';

const addScrollListener = (opts) => {
  const {
    mode,
    target,
    waypoints,
    margin,
    stepFunction,
    store,
    applyStyles,
  } = opts;

  const { targetY, viewportHeight } = getPositions(target);

  const throttledFunction = throttle(
    () => paintTween({
      mode,
      target,
      waypoints,
      margin,
      stepFunction,
      store,
      targetY,
      viewportHeight,
      applyStyles,
    }),
    SCROLL_THROTTLE_THRESHOLD,
  );

  window.addEventListener('scroll', throttledFunction);

  return throttledFunction;
};

export default addScrollListener;
