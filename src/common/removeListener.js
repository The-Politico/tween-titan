const removeListener = (type, eventFunction) => {
  window.removeEventListener(type, eventFunction);
};

export default removeListener;
