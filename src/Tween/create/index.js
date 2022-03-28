import addResizeListener from 'Common/addListener/resize';
import removeListener from 'Common/removeListener';
import refresh from 'Common/refresh';

const create = (mode, opts = {}) => {
  const {
    target,
    waypoints = [{ percent: 0, style: {} }, { percent: 1, style: {} }],
    margin = 0,
    stepFunction,
    applyStyles = true,
    refreshInterval = 0,
  } = opts;

  if (!target || waypoints.length === 0) {
    return {
      destroy: () => {},
      interval: null,
      store: {
        style: {},
      },
    };
  }

  const store = {};
  store.update = (key, value) => {
    store[key] = value;
  };

  store.resizeFunction = addResizeListener({
    mode,
    target,
    waypoints,
    margin,
    stepFunction,
    applyStyles,
    store,
  });

  const refreshTween = () => refresh({
    mode,
    store,
    target,
    waypoints,
    margin,
    stepFunction,
    applyStyles,
  });
  refreshTween();

  if (refreshInterval > 0) {
    store.interval = setInterval(refreshTween, refreshInterval);
  }

  return {
    target,
    destroy: () => {
      removeListener('scroll', store.scrollFunction);
      removeListener('resize', store.resizeFunction);
      clearInterval(store.interval);
    },
    store,
    refresh: refreshTween,
    style: {},
  };
};

export default create;
