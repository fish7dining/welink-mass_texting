import React from 'react';
import { Article } from '@huawei/react-weui';
import './index.less';

export default class Desc extends React.Component {

  componentWillMount() {
    window.HWH5.navTitle({ title: '框架说明' });
    
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Article>
          <h1>框架说明</h1>
          <h2>一�?weui 设计语言(适配welink风格)�?React 实现�?/h2>
          <ul className="advantage">
            <li> - 适配WeLink交互语言和视觉风格�?/li>
            <li> - 开箱即用的高质�?React 组件�?/li>
            <li>- 本地开发自动检测Welink JSAPI新版本并集成到开发环境�?/li>
            <li> - 使用 eslint，按照规则给出报告的代码检测工�?避免低级错误和统一代码的风格�?/li>
            <li> - 基于 npm + webpack + react + redux + less + jsapi + weui（mit license），
              适配WeLink风格 的快速开发本地化的框架�?
            </li>
          </ul>
        </Article>
      </div>
    );
  }
};
