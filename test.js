const util = require('util');
const childProcess = require('child_process');

const execFileNode = util.promisify(childProcess.execFile);

function execFile(command, args) {
  return execFileNode(command, args, {
    cwd: process.cwd(),
    env: process.env,
    encoding: 'utf-8',
  });
}

async function run(screenshot, target) {
  await execFile('mkdir', ['-p', target]);
}

run('temp/0/123');
run('temp/1/123');
run('temp/2/123');
