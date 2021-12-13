import React from 'react';
import { propsToClassname, debounce } from '@/utils';
import './index.less';

const Button = props => {
  const { children, type, size, shape, onClick, disabled } = props;

  return (
    <button
      className={`com-button ${propsToClassname('com-button', { type, size, shape })}`}
      onClick={debounce(onClick, 300)}
    >
      {children}
    </button>
  );
};

export default Button;
