import React, { useState } from 'react';
import classNames from 'classnames';
import { propsToClassname, debounce } from '@/utils';
import './index.less';

const MODULE = 'com-input';

const Input = props => {
  const { shape, size, suffix, prefix, onChange, onEnter, placeholder, type } = props;

  const [focus, setFocus] = useState(false);

  const onEnterHandle = target => {
    target.keyCode === 13 && onEnter();
  };

  const inputClassname = classNames(
    MODULE,
    { [`${MODULE}_focus`]: focus },
    propsToClassname(MODULE, { shape, size })
  );

  return (
    <div className={inputClassname}>
      <div className={`${MODULE}-prefix`}>{prefix}</div>
      <input
        className={`${MODULE}-main`}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
        onKeyUp={debounce(onEnterHandle, 300)}
        placeholder={placeholder}
      />
      <div className={`${MODULE}-suffix`}>{suffix}</div>
    </div>
  );
};

export default Input;
