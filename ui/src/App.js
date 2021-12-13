import React, { Fragment } from 'react';
import '@/assets/style/reset.less';
import { Input, Button } from '@/components/Base';

const App = () => {
  return (
    <Fragment>
      <Input shape='round' placeholder='搜索'>
        登录
      </Input>
      <Button type='primary'>退出登录</Button>
    </Fragment>
  );
};

export default App;
