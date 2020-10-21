import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';
import { ConfigProvider, message } from 'antd';
import { UseRequestProvider } from 'ahooks';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

import { formatResult } from '@/utils/formatter';

import Home from './pages/home';
import Account from './pages/account';

import '@/assets/styles/index.scss';

moment.locale('zh-cn');

const App = () => {
  return (
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
      <UseRequestProvider
        value={{
          manual: false,
          throwOnError: true,
          formatResult,
          onError: (err: Error) => {
            console.log(err);
            message.error('网络请求出错！');
          },
        }}
      >
        <Router>
          <Home path="/" />
          <Account path="account" />
        </Router>
      </UseRequestProvider>
    </ConfigProvider>
  );
};

export default hot(App);
