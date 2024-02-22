/**
 * Config
 */

const package = require('../package.json');
const merge = require('deepmerge');

const grid = '8px';

const spacing = {
  '0': '0',
  '1': 'calc(var(--nyco-grid) * 1)',
  '2': 'calc(var(--nyco-grid) * 2)',
  'DEFAULT': 'calc(var(--nyco-grid) * 3)', // Grid × 3 = 24px
  '3': 'calc(var(--nyco-grid) * 3)',
  '4': 'calc(var(--nyco-grid) * 4)',
  '5': 'calc(var(--nyco-grid) * 5)',
  '6': 'calc(var(--nyco-grid) * 6)',
  '7': 'calc(var(--nyco-grid) * 7)',
  '8': 'calc(var(--nyco-grid) * 8)'
};

const color = {
  'default-0': '#03142C',
  'default-1': '#031837',
  'default-2': '#071F42',
  'default-3': '#0C264D',
  'default-4': '#122F5A',

  'light-0': '#FFFFFF',
  'light-1': '#FAFDFF',
  'light-2': '#F0F6FA',
  'light-3': '#E3F1FD',
  'light-4': '#C9E7FC',
  'light-5': '#B8E0FC',

  'blue-d-1': '#00369F',
  'blue': '#004CBE',
  'blue-l-1': '#217CEB',
  'blue-l-2': '#53B3FC',
  'blue-l-3': '#C9EEFE',

  'green-d-2': '#006333',
  'green-d-1': '#007539',
  'green': '#008E46',
  'green-l-1': '#4BAC4C',
  'green-l-2': '#A8DD7C',
  'green-l-3': '#DFEED2',

  'yellow-d-4': '#5C3D00',
  'yellow-d-3': '#8F5F00',
  'yellow-d-2': '#AD7200',
  'yellow-d-1': '#D99000',
  'yellow': '#FFBE17',
  'yellow-l-1': '#FFD466',
  'yellow-l-2': '#FFDF8D',
  'yellow-l-3': '#FFF0C7',

  'red': '#CF2A46',
  'red-l-1': '#F1647C',
  'red-l-2': '#FC9CAC',

  'purple': '#4439BE',
  'purple-l-1': '#7C72ED',
  'purple-l-2': '#A9ACFC',

  'black': '#000000',
  'white': '#FFFFFF',

  'eighth-avenue': '#2850AD',           // Vivid Blue, A C E
  'sixth-avenue': '#FF6319',            // Bright Orange, B D F M
  'crosstown': '#6CBE45',               // Lime Green, G
  'canarsie': '#A7A9AC',                // Light Slate Grey, L
  'nassau': '#996633',                  // Terra Cotta Brown, J Z
  'broadway': '#FCCC0A',                // Sunflower Yellow, N Q R W
  'broadway-seventh-avenue': '#EE352E', // Tomato Red, 1 2 3
  'lexington-avenue': '#00933C',        // Apple Green, 4 5 6 6 Express
  'flushing': '#B933AD',                // Raspberry, 7 7 Express
  'shuttles': '#808183',                // Dark Slate Gray, S

  'transparent': 'rgba(255, 255, 255, 0)',
  'inherit': 'inherit',

  'text': '#080707',
  'background': 'var(--nyco-background)',
  'brand': 'var(--nyco-brand)',
  'alt': 'var(--nyco-alt)',
  'em': 'var(--nyco-em)',
  'error': 'var(--nyco-error)',
  'primary': 'var(--nyco-primary)',
  'secondary': 'var(--nyco-secondary)',
  'tertiary': 'var(--nyco-tertiary)',

  'scale-0': 'var(--nyco-scale-0)',
  'scale-1': 'var(--nyco-scale-1)',
  'scale-2': 'var(--nyco-scale-2)',
  'scale-3': 'var(--nyco-scale-3)',
  'scale-4': 'var(--nyco-scale-4)'
};

const dark = {
  'scale': {
    '0': 'var(--nyco-color-default-0)',
    '1': 'var(--nyco-color-default-1)',
    '2': 'var(--nyco-color-default-2)',
    '3': 'var(--nyco-color-default-3)',
    '4': 'var(--nyco-color-default-4)'
  },

  'text': 'var(--nyco-color-white)',
  'brand': 'var(--nyco-color-blue-l-2)',
  'alt': 'var(--nyco-color-blue-l-3)',
  'em': 'var(--nyco-color-yellow-l-2)',
  'error': 'var(--nyco-color-yellow-l-2)',

  // 'primary': 'var(--nyco-color-blue-l-1)',
  'primary': 'var(--nyco-color-blue-l-2)',
  'secondary': 'var(--nyco-color-green-l-3)',
  'tertiary': 'var(--nyco-color-yellow-l-1)',

  'link': 'var(--nyco-color-blue-l-2)',
  'link-hover': 'var(--nyco-color-blue-l-3)',
  // 'link-visited': 'var(--nyco-color-purple-l-2)',
  'link-visited': 'inherit',

  'focus': 'var(--nyco-color-blue-l-2)',
  'focus-background': 'var(--nyco-background)',

  'background': 'var(--nyco-scale-1)',

  'divider': 'var(--nyco-scale-3)',

  // 'font-smooth': 'always',             // non-standard & not on standards track
  'webkit-font-smoothing': 'antialiased', // always
  'moz-osx-font-smoothing': 'grayscale',  // always

  'input': {
    'text': 'var(--nyco-scale-1)',
    'background': 'var(--nyco-color-white)',
    'border': 'var(--nyco-color-transparent)'
  },

  'option': {
    'text': 'var(--nyco-color-blue-l-2)',
    'background': 'var(--nyco-scale-2)',
    'border': 'var(--nyco-color-transparent)',

    'text-hover ': 'var(--nyco-color-blue-l-3)',
    'border-hover': 'var(--nyco-color-transparent)',
    'background-hover': 'var(--nyco-scale-0)',

    'text-checked': 'var(--nyco-color-blue-l-3)',
    'background-checked': 'var(--nyco-scale-0)',

    'graphic-checkbox': 'var(--nyco-color-transparent)',
    'graphic-checkbox-checked': 'var(--nyco-scale-0)'
  },

  'statuses': {
    'primary': {
      'text': 'var(--nyco-scale-2)',
      'background': 'var(--nyco-color-blue-l-2)',
    },
    'secondary': {
      'text': 'var(--nyco-scale-2)',
      'background': 'var(--nyco-color-green-l-3)',
    },
    'tertiary': {
      'text': 'var(--nyco-scale-2)',
      'background': 'var(--nyco-color-yellow-l-1)',
    },
    'alt': {
      'text': 'var(--nyco-scale-1)',
      'background': 'var(--nyco-color-blue-l-3)'
    }
  },

  'button': {
    'border-color': 'var(--nyco-scale-3)',
    'primary': {
      'text': 'var(--nyco-color-blue-l-2)',
      'text-hover': 'var(--nyco-color-blue-l-3)',
      'background': 'var(--nyco-scale-2)',
      'background-hover': 'var(--nyco-scale-0)'
    },
    'secondary': {
      'text': 'var(--nyco-color-green-l-3)',
      'text-hover': 'var(--nyco-color-green-l-3)',
      'background': 'var(--nyco-scale-2)',
      'background-hover': 'var(--nyco-scale-0)'
    },
    'tertiary': {
      'text': 'var(--nyco-color-yellow-l-2)',
      'text-hover': 'var(--nyco-color-yellow-l-3)',
      'background': 'var(--nyco-scale-2)',
      'background-hover': 'var(--nyco-scale-0)'
    },
    'disabled': {
      'text': 'var(--nyco-color-light-0)',
      'background': 'var(--nyco-scale-2)'
    }
  },

  'badge': {
    'color': 'var(--nyco-color-yellow-d-4)',
    'background': 'var(--nyco-color-yellow-l-3)'
  },

  'table': {
    'odd': 'var(--nyco-scale-3)',
    'even': 'var(--nyco-scale-2)'
  },

  'descriptionList': {
    'term': 'var(--nyco-alt)',
    'odd': 'var(--nyco-scale-3)',
    'even': 'var(--nyco-scale-2)',
    'border': 'var(--nyco-scale-2)'
  },

  'code': {
    'text': 'var(--nyco-color-blue-l-3)',
    'text-base': 'var(--nyco-color-blue-l-3)',
    'text-keyword': 'var(--nyco-color-blue-l-1)',
    'text-javascript': 'var(--nyco-color-blue-l-3)',
    'text-css': 'var(--nyco-color-blue-l-3)',
    'text-comment': 'var(--nyco-color-purple-l-1)',
    'text-string': 'var(--nyco-color-yellow-l-1)',
    'text-symbol': 'var(--nyco-color-yellow-l-1)',
    'text-code': 'var(--nyco-color-yellow-l-1)',
    'link': 'var(--nyco-color-blue-l-3)',
    'background': 'var(--nyco-color-default-2)',
    'border': 'var(--nyco-color-transparent)',

    // 'font-smooth': 'always',             // non-standard & not on standards track
    'webkit-font-smoothing': 'antialiased', // always
    'moz-osx-font-smoothing': 'grayscale'   // always
  }
};

const light = merge(dark, {
  'scale': {
    '0': 'var(--nyco-color-light-0)',
    '1': 'var(--nyco-color-light-1)',
    '2': 'var(--nyco-color-light-2)',
    '3': 'var(--nyco-color-light-3)',
    '4': 'var(--nyco-color-light-4)'
  },

  'text': 'var(--nyco-color-default-3)',
  'brand': 'var(--nyco-color-blue)',
  'alt': 'var(--nyco-text)',
  'em': 'var(--nyco-color-yellow-d-4)',
  'error': 'var(--nyco-color-red)',

  'primary': 'var(--nyco-color-blue)',
  'secondary': 'var(--nyco-color-green)',
  'tertiary': 'var(--nyco-color-yellow-d-1)',

  'link': 'var(--nyco-color-blue)',
  'link-hover': 'var(--nyco-text)',
  // 'link-visited': 'var(--nyco-color-purple)',
  'link-visited': 'inherit',

  'focus': 'var(--nyco-color-blue)',
  'focus-background': 'var(--nyco-background)',

  'background': 'var(--nyco-scale-1)',

  'divider': 'var(--nyco-scale-3)',

  // 'font-smooth': 'auto',         // browser default, non-standard & not on standards track
  'webkit-font-smoothing': 'auto',  // browser default
  'moz-osx-font-smoothing': 'auto', // browser default

  'input': {
    'text': 'var(--nyco-color-default-1)',
    'background': 'var(--nyco-color-white)',
    'border': 'var(--nyco-color-default-1)'
  },

  'option': {
    'text': 'var(--nyco-text)',
    'background': 'var(--nyco-scale-2)',
    'border': 'var(--nyco-color-transparent)',

    'text-hover ': 'var(--nyco-link)',
    'border-hover': 'var(--nyco-link)',
    'background-hover': 'var(--nyco-scale-0)',

    'text-checked': 'var(--nyco-color-blue)',
    'background-checked': 'var(--nyco-scale-0)',

    'graphic-checkbox': 'var(--nyco-color-transparent)',
    'graphic-checkbox-checked': 'var(--nyco-scale-0)'
  },

  'statuses': {
    'primary': {
      'text': 'var(--nyco-text)',
      'background': 'var(--nyco-color-blue-l-3)',
    },
    'secondary': {
      'text': 'var(--nyco-text)',
      'background': 'var(--nyco-color-green-l-3)',
    },
    'tertiary': {
      'text': 'var(--nyco-text)',
      'background': 'var(--nyco-color-yellow-l-2)',
    },
    'alt': {
      'text': 'var(--nyco-text)',
      'background': 'var(--nyco-color-blue-l-3)'
    }
  },

  'button': {
    'border-color': 'currentColor',
    'primary': {
      'text': 'var(--nyco-scale-0)',
      'text-hover': 'var(--nyco-scale-0)',
      'background': 'var(--nyco-color-blue)',
      'background-hover': 'var(--nyco-color-blue-d-1)'
    },
    'secondary': {
      'text': 'var(--nyco-scale-0)',
      'text-hover': 'var(--nyco-scale-0)',
      'background': 'var(--nyco-color-default-2)',
      'background-hover': 'var(--nyco-color-default-4)'
    },
    'tertiary': {
      'text': 'var(--nyco-text)',
      'text-hover': 'var(--nyco-text)',
      'background': 'var(--nyco-color-yellow-l-1)',
      'background-hover': 'var(--nyco-color-yellow-l-2)'
    },
    'disabled': {
      'text': 'var(--nyco-color-default-4)',
      'background': 'var(--nyco-scale-3)'
    }
  }
});

const shadow = {
  'up-dark': '0 3px 12px 2px rgba(0, 0, 0, 0.15)',
  'up-light': '0 3px 12px 2px rgba(21, 60, 96, 0.13)'
};

module.exports = {
  'output': `"${process.env.PWD}/src/config/_tokens.scss"`,
  'stringKeys': 'stringKeys, fontFace-system, fontFace-nyc, fontFace-primary, fontFace-secondary, fontFace-code',
  'version': package.version,
  'cdn': `"https://cdn.jsdelivr.net/gh/nycopportunity/pattern-elements@v${package.version}/dist/"`,
  'googleFonts': '"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400;1,700&display=swap"',
  'language': [
    'default',
    'ar',
    'es',
    'kr',
    'ur',
    'tc'
  ],
  'languageRtl': [
    'ar',
    'ur'
  ],
  'fontFace-code': 'monospace',
  'fontFace-system': 'ui-sans-serif, system-ui, sans-serif',
  'fontFace-nyc': '\'Helvetica Neue Pro\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
  'fontFace-primary': '\'Rubik\', sans-serif',
  'fontFace-secondary': '\'Rubik\', sans-serif',
  'fontFamily': {
    'body': 'var(--nyco-fontFace-secondary)',
    'h1': 'var(--nyco-fontFace-primary)',
    'h2': 'var(--nyco-fontFace-primary)',
    'h3': 'var(--nyco-fontFace-primary)',
    'blockquote': 'var(--nyco-fontFace-primary)',
    'h4': 'var(--nyco-fontFace-secondary)',
    'h5': 'var(--nyco-fontFace-secondary)',
    'h6': 'var(--nyco-fontFace-secondary)',
    'p': 'var(--nyco-fontFace-secondary)',
    'button': 'var(--nyco-fontFace-secondary)',
    'tables': 'var(--nyco-fontFace-secondary)',
    'option': 'var(--nyco-fontFace-secondary)',
    'question': 'var(--nyco-fontFace-secondary)',
    'code': 'var(--nyco-fontFace-code)',
    'system': 'var(--nyco-fontFace-system)',
    'nyc': 'var(--nyco-fontFace-nyc)',
    'primary': 'var(--nyco-fontFace-primary)',
    'secondary': 'var(--nyco-fontFace-secondary)',
    'inherit': 'inherit',
  },
  'fontWeight': {
    'body': 'normal',
    'h1': 'bold',
    'h2': 'bold',
    'h3': 'bold',
    'blockquote': 'normal',
    'h4': 'bold',
    'h5': 'bold',
    'h6': 'normal',
    'p': 'normal',
    'link': 'bold',
    'small': 'normal',
    'button': 'bold',
    'tables': 'normal',
    'normal': 'normal',
    'bold': '800',
    'option': 'bold',
    'question': 'normal',
    'code': 'normal'
  },
  'fontStyle': {
    'body': 'normal',
    'h1': 'normal',
    'h2': 'normal',
    'h3': 'normal',
    'blockquote': 'normal',
    'h4': 'normal',
    'h5': 'normal',
    'h6': 'normal',
    'p': 'normal',
    'link': 'normal',
    'small': 'normal',
    'button': 'normal',
    'tables': 'normal',
    'question': 'normal',
    'normal': 'normal',
    'italic': 'italic'
  },
  'fontSize': {
    'body': '1rem',
    'h1': '3.4375rem',
    'h2': '2.75rem',
    'h3': '2.0625rem',
    'blockquote': '2rem',
    'h4': '1.8rem',
    'h5': '1.4rem',
    'h6': '1.25rem',
    'p': '1.13rem',
    'small': '1rem',
    'button': '1.13rem',
    'tables': '0.8rem',
    'option': 'inherit',
    'question': 'inherit',
    'code': '0.72rem'
  },
  'lineHeight': {
    'normal': 'normal',
    'body': 'normal',
    'h1': '1.3',
    'h2': '1.3',
    'h3': '1.3',
    'blockquote': '1.3',
    'h4': '1.3',
    'h5': '1.3',
    'h6': '1.3',
    'p': '1.5',
    'small': '1.6',
    'button': '1.6',
    'tables': '1.6',
    'option': 'normal',
    'question': 'normal',
    'code': '1.9'
  },
  'textDecoration': {
    'link': 'underline'
  },
  'typography': {
    'small': '16px',
    'mobile': '18px',
    'tablet': '20px',
    'desktop': '22px',
    'margin-bottom': '1rem',
    'list-indent': '1.5rem'
  },
  'scale': {
    'default': [0, 1, 2, 3, 4],
    'light':   [0, 1, 2, 3, 4]
  },
  'color': color,
  'colorMode': {
    'dark': {
      ...dark,
      'shadow': {
        'up': shadow['up-dark']
      }
    },
    'default': {
      ...light,
      'shadow': {
        'up': shadow['up-light']
      }
    }
  },
  'screen': {
    'desktop': '1112px', // Set minimum width for devices.
    'tablet': '768px',
    'mobile': '480px',
    'small': '400px'
  },
  'screen-max-width-offset': '0.02px', // There is a max width mixin but its is discouraged over min width
  'grid': grid,
  'dimension': {
    'auto': 'auto',
    'full': '100%',
    'half': '50%',
    '90vh': '90vh',
    '100vh': '100vh',
    'content-width': 'calc(var(--nyco-grid) * 112)',  // '896px',
    'site-max-width': 'calc(var(--nyco-grid) * 180)', // '1440px',
    'site-min-width': 'calc(var(--nyco-grid) * 40)',  // '320px',
    'sidebar-width': '20rem',
    'sidebar-width-small': '12rem',
    'map-container-height': '90vh',
    'map-height': '50vh',
    'topbar-height': 'calc(var(--nyco-grid) * 11)',
    'scroll-peek-column-width': '88%'
  },
  'z': {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    'footer': 0,
    'search': 1000,
    'navigation': 1010,
    'mobile-menu': 1020,
    'auto': 'auto',
  },
  'animate': {
    'ease-in': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', // Quint
    'ease-out': 'cubic-bezier(0.23, 1, 0.32, 1)',        // Quint
    'duration': '1s',
    'timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'
  },
  'borderWidth': {
    '0': '0',
    'DEFAULT': '1px',
    '1': '1px',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '5': '5px',
    '6': '6px',
    '7': '7px',
    '8': '8px'
  },
  'spacing': spacing,
  'margin': {
    ...spacing,
    'auto': 'auto'
  },
  'iconSize': {
    'default': ['1rem', '1rem'], // Equal to the base line height
    '1': [spacing['1'], spacing['1']],
    '2': [spacing['2'], spacing['2']],
    '3': [spacing['3'], spacing['3']],
    '4': [spacing['4'], spacing['4']],
    '5': [spacing['5'], spacing['5']],
    '6': [spacing['6'], spacing['6']],
    '7': [spacing['7'], spacing['7']],
    '8': [spacing['8'], spacing['8']]
  },
  'focus': {
    'gap': '4px',
    'width': '4px'
  },
  'button': {
    'inner-size': '1.1rem',
    'radius': '5px',
    'radius-tag': '50px',
    'border-style': 'solid',
    'border-width': '2px',
    'variants': ['primary', 'secondary', 'tertiary']
  },
  'input': {
    'inner-size': '1.1rem',
    'radius': '0px',
    'border-style': 'solid',
    'border-width': '2px',
    'error-border-width': '4px',
    'icon-padding': '30px',
    'currency-font-size': '22px',
    'search-icon': [spacing['3'], spacing['3']]
  },
  'select': {
    'inner-size': '1.1rem',
    'radius': '5px',
    'border-style': 'solid',
    'border-width': '2px',
    'border-width': '2px',
    'stroke-width': '2px',
    'stroke-line': 'round'
  },
  'option': {
    'inner-size': '1.1rem',
    'radius': '5px',
    'border-style': 'solid',
    'border-width': '2px',
    'stroke-width': '2px',
    'stroke-line': 'round'
  },
  'badge': {
    'font-size': '90%',
    'font-weight': 'bold',
    'line-height': 'inherit',
    'text-transform': 'normal',
    'padding': '0 var(--nyco-grid)',
    'radius': '10px',
    'small-line-height': '1.3',
    'small-padding': '0 calc(var(--nyco-grid) * 0.5)'
  },
  'shadow': {
    ...shadow,
    'up': 'var(--nyco-shadow-up)',
    'none': 'none'
  },
  'cell': {
    'padding': '0.8rem 1rem'
  }
};
