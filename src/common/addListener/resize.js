import { throttle } from 'lodash';
import RESIZE_THROTTLE_THRESHOLD from 'Constants/main';
import refresh from 'Common/refresh';

const addResizeListener = (opts) => {
  const throttledFunction = throttle(() => refresh(opts),
    RESIZE_THROTTLE_THRESHOLD);

  window.addEventListener('resize', throttledFunction);

  return throttledFunction;
};

export default addResizeListener;
