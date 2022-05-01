const cmd = ['npm', 'run', 'start:' + (process.env.APP_MODE || 'frontend')];

const execSync = require('child_process').execSync;
execSync(cmd.join(' '), {stdio:[0,1,2]});
