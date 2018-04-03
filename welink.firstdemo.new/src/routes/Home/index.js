import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as home from '../../actions/home';
import * as global from '../../actions/global';

import logo from './images/logo.png';
import './index.less';
import i18n from 'i18n';
import { Link } from 'react-router-dom';

@connect(
  state => ({ ...state.home }),
  dispatch => bindActionCreators({ ...home, ...global }, dispatch)
)
export default class Home extends React.Component {

  async componentWillMount() {
    window.HWH5.navTitle({ title: 'Hello WeLink' });
    const userInfo = await this.props.getUserInfo();
    console.log(userInfo, 'window.HWH5.userInfo');
    const { homeInfo, dataList } = this.props;
    if (!homeInfo) {
      this.props.getHomeInfo().then((data)=>{
        const { title } = data;
        document.title = title;
      });
    }
    // fetch请求Demo，本地请求proxy服务器，在server.js中配置，解决本地调试接口跨域问题
    if (!dataList || dataList.length === 0) {
      this.props.getFetchDemo();
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  // 打开新的窗口
  openWebview(url) {
    window.HWH5.openWebview({ uri: url });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          /> 
        </div>
        <h1 className="App-title">
          {i18n.t('common:welcome')}
        </h1>
        <p className="App-intro">
          {i18n.t('home:getStart')} {i18n.t('home:edit')}<code>src/routes/Home.js</code> {i18n.t('home:saveReload')}
        </p>
        <Link to="/desc" className="desc-link">使用说明</Link>
        {
          process.env.APP_ENV === 'uat' && 
          <div className="develop-doc">
            <h3>开发文档：</h3>
            <ul>
              <li onClick={()=> this.openWebview('http://3ms.huawei.com/km/static/welink/doc/h5doc/welink/platform.html')}>WeLink平台简�?/li>
              <li onClick={()=> this.openWebview('http://3ms.huawei.com/km/static/welink/doc/h5doc/quickstart/')}>快速上�?/li>
              <li onClick={()=> this.openWebview('http://3ms.huawei.com/km/static/welink/doc/h5doc/jsapi/')}>JSAPI详解</li>
              <li onClick={()=> this.openWebview('http://3ms.huawei.com/km/static/welink/doc/h5doc/ui/ui.html')}>UI组件详解</li>
              <li onClick={()=> this.openWebview('http://3ms.huawei.com/km/static/welink/doc/h5doc/support/demo/')}>服务与支�?/li>
            </ul>
          </div>
        }
      </div>
    );
  }
};

Home.propTypes = {
  homeInfo: PropTypes.object,
  dataList: PropTypes.array,
  getHomeInfo: PropTypes.func,
  getUserInfo: PropTypes.func,
  getFetchDemo: PropTypes.func
};
