const getPositions = (target) => ({
  targetY: target.getBoundingClientRect().top + window.scrollY,
  viewportHeight: window.innerHeight,
});

export default getPositions;
