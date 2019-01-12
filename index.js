const path = require('path')
const cp = require('child_process')

cp.execSync([
  'node',
  path.resolve(__dirname, 'node_modules/xmind-and-markdown-translator/start.js'),
  `-s ${path.resolve(__dirname, 'interview-front-end.xmind')}`,
  `-d ${path.resolve(__dirname, 'front-end.md')}`
].join(' '))

console.log("build success!")