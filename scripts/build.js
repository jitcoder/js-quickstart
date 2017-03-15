require('colors'); // eslint-disable-line

const exec = require('child_process').exec;

let serverTranspilationModeArguments = '--minified true --compact auto';
if (process.env.NODE_ENV !== 'production') serverTranspilationModeArguments = '--source-maps';
const serverTranspilationArguments = `-d ./build ./src ${serverTranspilationModeArguments}`;

const outputs = {
  err: [],
  stdout: [],
  stderr: []
};

exec(`./node_modules/.bin/babel ${serverTranspilationArguments}`, (err, stdout, stderr) => {
  outputs.err.push(err);
  outputs.stdout.push(stdout);
  outputs.stderr.push(stderr);
});

