import addResizeListener from 'Common/addListener/resize';
import removeListener from 'Common/removeListener';
import refresh from 'Common/refresh';

const create = (mode, opts = {}) => {
  const {
    target,
    waypoints = [],
    margin = 0,
    stepFunction,
    applyStyles = true,
  } = opts;

  if (!target || waypoints.length === 0) {
    return {
      destroy: () => {},
      store: {
        style: {},
      },
    };
  }

  const store = {
    update(key, value) {
      this[key] = value;
    },
  };

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

  store.resizeFunction = addResizeListener({
    mode,
    target,
    waypoints,
    margin,
    stepFunction,
    store,
  });

  return {
    target,
    destroy: () => {
      removeListener('scroll', store.scrollFunction);
      removeListener('resize', store.resizeFunction);
    },
    store,
    refresh: refreshTween,
    style: {},
  };
};

export default create;
