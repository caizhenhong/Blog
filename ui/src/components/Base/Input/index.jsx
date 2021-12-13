import React, { useState } from 'react';
import classNames from 'classnames';
import { propsToClassname } from '@/utils';
import './index.less';

const Input = props => {
  const { shape, size, suffix, prefix, onChange, placeholder, type } = props;

  const [focus, setFocus] = useState(false);

  const inputClassname = classNames(
    'com-input',
    { 'com-input_focus': focus },
    propsToClassname('com-input', { shape, size })
  );

  return (
    <div className={inputClassname}>
      <div className='com-input-prefix'>{prefix}</div>
      <input
        className='com-input-main'
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className='com-input-suffix'>{suffix}</div>
    </div>
  );
};

export default Input;
