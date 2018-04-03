
import del from 'del';
import config from '../pluginAndroid.json';
/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del([`build/apps/${config.packageAlias}/${config.versionCode}/*`], { dot: true });
}

export default clean;
