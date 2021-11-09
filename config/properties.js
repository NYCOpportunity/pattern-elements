const resolve = require(`${process.env.PWD}/node_modules/@nycopportunity/pttrn/bin/util/resolve`);
const tokens = resolve('config/tokens', true, false);

module.exports = {
  'dist': 'dist/css/tokens.css',          // The tokens output
  'delete': ['dist', 'output', 'prefix'], // Don't export these as tokens
  ...tokens
};