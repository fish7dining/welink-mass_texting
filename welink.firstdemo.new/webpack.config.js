const path = require('path');
const webpack = require('webpack');
// let autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// let argv = require('yargs').argv;
var { packageAlias, versionCode } = require('./pluginAndroid.json'); // 默认取安卓配置文件数�?
const { port, host } = require('./config/server.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 判断当前运行环境是开发模式还是生产模�?
const DEBUG = !process.argv.includes('prod') && !process.argv.includes('uat');
const VERBOSE = process.argv.includes('verbose');
// 打包插件环境变量,只有开发环境和生产环境，涉及react、react-hot-loader等模块的打包
const NODE_ENV = DEBUG ? 'development' : 'production';
// 应用环境变量，包含开发环境，测试环境和生产环境，可用于各个环境的不同配置的判断，如请求url，可参考`config/web.config.js`�?
const APP_ENV = DEBUG ? 'development' : (process.argv.includes('uat') ? 'uat' : 'production');

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  new webpack.DefinePlugin({
    // 定义全局变量
    'process.env': {
      'NODE_ENV': JSON.stringify(NODE_ENV),
      'APP_ENV': JSON.stringify(APP_ENV),
      'PACKAGE_ALIAS': `"${packageAlias}"`,
      'VERSION_CODE': `"${versionCode}"`
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'html/index.html',
    title: packageAlias,
    version: Date.now(),
    env: APP_ENV,
    inject: true,
    template: '../templates/index.html'
  })
];
const app = ['./entry'];
if (!DEBUG) {
  plugins.push(
    new ExtractTextPlugin({
      filename: 'css/styles.css?v=[hash]'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  );
  // 生产包才需要压缩代码，其他环境不压�?
  if (APP_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
} else {
  app.unshift('react-hot-loader/patch', `webpack-dev-server/client?http://${host}:${port}`, 'webpack/hot/only-dev-server');
  // 使用谷歌浏览器打开
  const { platform } = process;
  let browser = 'google-chrome';
  if (platform === 'darwin') {
    browser = 'google chrome';
  } else if (platform === 'win32') {
    browser = 'chrome';
  }
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // 在浏览器自动打开url
    new OpenBrowserPlugin({ browser, url: `http://${host}:${port}/apps/${packageAlias}/${versionCode}/html/index.html` })
  );
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    // React 16 depends on the collection types Map and Set  https://reactjs.org/docs/javascript-environment-requirements.html
    vendor: ['core-js/es6/map', 'core-js/es6/set', 'core-js/es6/string', 'react', 'react-dom'],
    app
  },
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  },
  output: {
    filename: 'js/[name].js?v=[hash]',
    path: path.join(__dirname, `build/apps/${packageAlias}/${versionCode}/`),
    publicPath: !DEBUG ? '../' : `/apps/${packageAlias}/${versionCode}/`,
    chunkFilename: 'js/[name].js?v=[hash]'
  },
  // BASE_URL是全局的api接口访问地址
  plugins,
  // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路�?
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src')
    ],
    alias: {
      'actions': path.resolve(__dirname, 'src/actions'),
      'components': path.resolve(__dirname, 'src/components'),
      'routes': path.resolve(__dirname, 'routes'),
      'reducers': path.resolve(__dirname, 'src/reducers'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'i18n': path.resolve(__dirname, 'src/i18n')
    }
  },
  externals: {
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    }, {
      test: /\.(less|css)$/,
      use: !DEBUG ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader']
      }) : ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    }, {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: ['file-loader?limit=1000&name=assets/images/[md5:hash:base64:10].[ext]']
    },
    {
      test: /(\.jsx|\.js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  }
};
