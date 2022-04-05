/**
 * Config
 */

const package = require('../package.json');
const tokens = require('./tokens');

/**
 * Config
 */

module.exports = {
  /**
   * Configuration
   */
  src: 'src',
  views: 'views',
  dist: 'dist',
  marked: {
    gfm: true,
    headerIds: true,
    smartypants: true
  },
  beautify: {
    indent_size: 2,
    indent_char: ' ',
    preserve_newlines: false,
    indent_inner_html: false,
    wrap_line_length: 0,
    inline: [],
    indent_inner_html: false,
  },

  /**
   * Package Variables
   */
  package: package,
  tokens: tokens,
  process: {
    env: {
      NODE_ENV: process.env.NODE_ENV
    }
  },
  baseUrl: (process.env.NODE_ENV === 'production') ? package.homepage : '',
  urls: {
    tailwindDocs: 'https://tailwindcss.com/docs/'
  },
  links: {
    nycopportunity: {
      homepage: 'http://nyc.gov/opportunity',
      social: {
        github: 'https://github.com/nycopportunity',
        twitter:  'https://twitter.com/nycopportunity',
        facebook: 'https://www.facebook.com/nycopportunity',
        instagram: 'https://www.instagram.com/nycopportunity'
      }
    }
  },

  /**
   * Functions
   */
  createId: () => Math.random().toString(16).substring(2),
  createSlug: (s) => s.toLowerCase().replace(/[^0-9a-zA-Z - _]+/g, '')
    .replace(/\s+/g, '-').replace(/-+/g, '-')
};
