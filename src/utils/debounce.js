export const debounce = (func, time) => {
  let debounceHandler;
  return function () {
    clearTimeout(debounceHandler);
    debounceHandler = setTimeout(() => func.apply(this, arguments), time);
  };
};
