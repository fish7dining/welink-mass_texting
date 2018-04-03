
import run from './run';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(require('./clean'));
  await run(require('./bundle'));
  await run(require('./qrcode'));
  await run(require('./zip'));
}

export default build;
