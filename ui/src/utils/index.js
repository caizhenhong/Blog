// 将父组件传来的值转为 classname
export const propsToClassname = (block, props) => {
  const result = [];
  for (const key in props) {
    result.push(`${block}-${key}_${props[key] ? props[key] : 'default'}`);
  }
  return result.join(' ');
};

// 防抖
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(...args);
    }, delay);
  };
};

// 节流
export const throttle = (fn, delay) => {
  let timer;
  const begin = new Date().getTime();
  return (...args) => {};
};
