import React, { useState } from 'react';
import './index.less';
import { propsToClassname } from '@/utils';

const Input = props => {
  const { shape, size, suffix, prefix, onChange, placeholder, type } = props;

  const [focus, setFocus] = useState(false);

  const inputClassname = [
    'com-input',
    focus ? 'com-input_focus' : '',
    propsToClassname('com-input', { shape, size }),
  ].join(' ');

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
