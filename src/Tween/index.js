import create from './create';

const Tween = (mode) => ({
  create: (opts) => create(mode, opts),
});

export default Tween;
