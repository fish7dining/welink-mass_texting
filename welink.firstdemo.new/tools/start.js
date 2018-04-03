/**
 * 
*/
import host from './host';
import clean from './clean';
import copy from './copy';
import run from './run';
import jsapi from './jsapi';
import pinghost from './pinghost';

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function start() {
  await run(clean);
  await run(host);
  await run(pinghost);
  // 内网可以访问时，jsapi才检查更�?
  if (process.env.SSO_ISALIVE === 'true') {
    await run(jsapi);
    await run(copy.bind(undefined, { watch: true }));
  }
  require('../server');
}

export default start;
