/**
 * Dependencies
 */

// ...

/**
 * Config
 */

let sass = {
  sourceMapEmbed: true,
  precision: 2,
  includePaths: [
    './node_modules', './src'
  ]
};

let modules = [
  {
    file: './src/scss/site-default.scss',
    outDir: './dist/styles/',
    outFile: 'site-default.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    devModule: true
  }
];

modules = modules.map(m => {
  m.precision = sass.precision;
  m.includePaths = sass.includePaths;

  return m;
});

module.exports = modules;
