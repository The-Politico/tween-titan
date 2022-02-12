const TweenSelf = ({
  margin,
  targetY,
  viewportHeight,
}) => {
  const userY = window.scrollY;
  const { top = 0, bottom = 0 } = margin;
  const baselineY = userY + viewportHeight - (targetY - top);
  const runway = viewportHeight + top + bottom;
  const percentage = baselineY / runway;

  return percentage;
};

export default TweenSelf;
