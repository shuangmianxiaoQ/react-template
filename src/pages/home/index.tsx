import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button, DatePicker } from 'antd';

const Home: FC<RouteComponentProps> = () => {
  return (
    <div>
      <Button type="primary">测试按钮</Button>
      <DatePicker.RangePicker />
    </div>
  );
};

export default Home;
