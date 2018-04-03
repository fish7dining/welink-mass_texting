/**
 *  jsapi 判断是否有最新版本，并安装最新版本jsapi
 */
import semver from 'semver';
import which from 'which';
// import chalk from 'chalk';
import getNpmVersion from './lib/getNpmVersion';
import install from './lib/install';

async function jsapi() {

  const packageName = '@huawei/welink-jsapi';
  const version = getNpmVersion(packageName);
  const npm = install.findNpm();
  if (version.latest != null) {
    if (version && semver.lt(version.current, version.latest)) {
      await install.runCmd(which.sync(npm), ['install', `${packageName}@${version.latest}`, '--save-dev']);
      console.log(`${npm} ${packageName} @ ${version.latest} install end`);
    }
  } else {
    await install.runCmd(which.sync(npm), ['install', `${packageName}`, '--save-dev']);
  }

}
export default jsapi;
