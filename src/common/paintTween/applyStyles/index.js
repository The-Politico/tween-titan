const applyStyles = ({ target, style }) => {
  Object.entries(style).forEach(([key, value]) => {
    target.style[key] = value; // eslint-disable-line no-param-reassign
  });
};

export default applyStyles;
