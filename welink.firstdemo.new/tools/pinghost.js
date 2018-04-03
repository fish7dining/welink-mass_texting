const ping = require('ping');
/**
 * 检查内网地址是否可以访问，如果可以，�?server.js 将启�?sso 登录
 */
async function pinghost() {
  await new Promise(function (resolve, reject) {
    const host = 'login-beta.huawei.com';
    ping.sys.probe(host, function (isAlive) {
      var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
      console.log(msg);
      process.env.SSO_ISALIVE = isAlive;
      resolve(isAlive);
    });
  });
}

export default pinghost;
