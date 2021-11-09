/**
 * Dependencies
 */

const package = require(`${process.env.PWD}/package.json`);

/**
 * Config
 */

 const code = {
  'code-primary': 'navy-70t',
  'code-secondary': 'navy',
  'code-background': 'blue-10t',
  'code-border': 'navy-70t'
};

const color = {
  'primary': [
    'navy',
    'blue'
  ],
  'secondary': [
    'red',
    'grey',
    'white'
  ],
  'tertiary': [
    'marigold',
    'pink',
    'green'
  ],
  'values': {
    'navy': '#031553',
    'navy-70t': '#4157aa',
    'navy-50t': '#8195dc',
    'navy-30t': '#cdd8ef',
    'blue': '#1642DF',
    'blue-70t': '#568adf',
    'blue-50t': '#96beff',
    'blue-30t': '#d2e8ff',
    'blue-20t': '#E7F2FE',
    'blue-10t': '#F0F7FE',
    'red': '#fc5d52',
    'red-70t': '#ff8787',
    'red-50t': '#ffafaf',
    'red-30t': '#ffdbdb',
    'grey': '#57595C',
    'grey-70t': '#7c7f83',
    'grey-50t': '#999ca4',
    'grey-30t': '#c1c6cb',
    'grey-20t': '#e6e8ec',
    'white': '#F3F3F3',
    'white-70t': '#F6F6F6',
    'white-50t': '#F9F9FA',
    'white-30t': '#FBFCFC',
    'marigold': '#faa302',
    'marigold-70t': '#fbb95a',
    'marigold-50t': '#fbd8a1',
    'marigold-30t': '#ffeecd',
    'pink': '#f9a5da',
    'pink-70t': '#ffc0f6',
    'pink-50t': '#fbd9ff',
    'pink-30t': '#fff0fe',
    'green': '#04A487',
    'green-70t': '#11D4B1',
    'green-50t': '#AEF4E7',
    'green-30t': '#E6FEFA',
    'base-black': '#000000',
    'base-white': '#FFFFFF',
    'transparent': 'rgba(255, 255, 255, 0)'
  },
  'light-background': {
    'color': 'base-black',
    'color-alt': 'grey',
    'headings': 'base-black',
    'hyperlinks': 'blue',
    'visited': 'blue',
    'hover': 'navy',
    'background-color': 'base-white',
    'border': 'grey',
    'input-background': 'base-white',
    'placeholder': 'grey-50t',
    'focus': 'blue',
    'error': 'red',
    'box-shadow': 'navy',
    'button-text': 'base-white',
    'primary': 'blue',
    'secondary': 'red',
    'button-disabled': 'grey-70t',
    ...code
  },
  'mid-background': {
    'color': 'base-black',
    'color-alt': 'grey',
    'headings': 'base-black',
    'hyperlinks': 'blue',
    'visited': 'blue',
    'hover': 'navy',
    'background-color': 'white',
    'border': 'grey',
    'input-background': 'base-white',
    'placeholder': 'grey-50t',
    'focus': 'blue',
    'error': 'red',
    'box-shadow': 'navy',
    'button-text': 'base-white',
    'primary': 'blue',
    'secondary': 'red',
    'button-disabled': 'grey-70t',
    ...code
  },
  'primary-background': {
    'color': 'base-white',
    'color-alt': 'navy-50t',
    'font-smooth': true,
    'headings': 'base-white',
    'hyperlinks': 'base-white',
    'visited': 'base-white',
    'hover': 'base-white',
    'background-color': 'blue',
    'border': 'blue-10t',
    'input-background': 'blue',
    'placeholder': 'base-white',
    'focus': 'blue-10t',
    'error': 'red',
    'box-shadow': 'base-white',
    'button-text': 'base-white',
    'primary': 'navy',
    'secondary': 'red',
    'button-disabled': 'grey-70t',
    ...code
  },
  'dark-background': {
    'color': 'base-white',
    'color-alt': 'navy-50t',
    'font-smooth': true,
    'headings': 'base-white',
    'hyperlinks': 'base-white',
    'visited': 'base-white',
    'hover': 'base-white',
    'background-color': 'navy',
    'border': 'blue-70t',
    'input-background': 'navy',
    'placeholder': 'base-white',
    'focus': 'blue-70t',
    'error': 'red',
    'box-shadow': 'base-white',
    'button-text': 'base-white',
    'primary': 'blue',
    'secondary': 'red',
    'button-disabled': 'grey-70t',
    ...code
  }
};

module.exports = {
  output: `"${process.env.PWD}/src/config/_tokens.scss"`,
  prefix: '"$tokens:"',
  animate: {
    'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'speed': '0.75s',
    'timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'
  },
  borderRadius: {
    '0': '0',
    '1': '2px',
    'DEFAULT': '2px',
    '2': '2px'
  },
  borderWidth: {
    '0': '0',
    '1': '1px',
    'DEFAULT': '2px',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '8': '8px'
  },
  shadow: {
    'none': 'none',
    'up': '8px 8px 0px 0px var(--nyco-box-shadow-color)',
    'up-2': '16px 16px 0px 0px var(--nyco-box-shadow-color)'
  },
  color: color,
  cdn: '"https://cdn.jsdelivr.net/gh/cityofnewyork/nyco-patterns@v' + package.version + '/dist"',
  googlefonts: '"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"',
  fontFamily: {
    'system': [
      '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
      'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'
    ],
    'code': [
      'monospace'
    ],
    'default': [
      '"IBM Plex Sans"', 'sans-serif'
    ],
    'default-sans': [
      '"IBM Plex Sans"', 'sans-serif'
    ],
    'default-serif': [
      '"IBM Plex Serif"', 'sans-serif'
    ],
    'h1': [
      '"Helvetica Neue Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ],
    'h2': [
      '"Helvetica Neue Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ],
    'h3': [
      '"Helvetica Neue Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ],
    'blockquote': [
      '"Helvetica Neue Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ],
    'jumbo': [
      '"Helvetica Neue Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ]
  },
  fontWeight: {
    'html': 'normal',
    'h1': 'bold',
    'h2': 'bold',
    'h3': 'bold',
    'h4': 'bold',
    'h5': 'bold',
    'h6': 'bold',
    'jumbo': 'bold',
    'blockquote': 'bold',
    'small': 'normal',
    'code': 'normal',
    'normal': 'normal',
    'bold': 'bold'
  },
  fontSize: {
    'jumbo': '3em',
    'h1': '2.488em',
    'h2': '2.074em',
    'h3': '1.728em',
    'h4': '1.44em',
    'h5': '1.2em',
    'h6': '1em',
    'html': '16px',
    'code': '1em',
    'default': '1em',
    'large': '1.2em',
    'small': '0.833em',
    'blockquote': '2.074em'
  },
  grid: '8px',
  icon: {
    'width': '24px',
    'height': '24px'
  },
  input: {
    'inner-size': '24px',
    'border-radius': '2px',
    'border-width': '1px'
  },
  button: {
    'inner-size': '24px',
    'border-width': '2px',
    'border-radius': '2px'
  },
  option: {
    'inner-size': '24px',
    'border-radius': '2px',
    'border-style': 'solid',
    'border-width': '1px',
    'border-transparent': false,
    'stroke-width': '2px',
    'stroke-line': 'round'
  },
  select: {
    'inner-size': '24px',
    'border-radius': '2px',
    'border-style': 'solid',
    'border-width': '1px',
    'stroke-width': '2px',
    'stroke-line': 'round'
  },
  lineHeight: {
    'jumbo': '1.2',
    'h1': '1.2',
    'h2': '1.2',
    'h3': '1.2',
    'h4': '1.2',
    'h5': '1.2',
    'h6': '1.2',
    'html': '1.5',
    'code': '1.6',
    'small': 'normal',
    'blockquote': 'normal'
  },
  maxWidth: {
    'auto': 'auto',
    'full': '100%',
    '600': '600px',
    '900': '896px'
  },
  screen: {
    'desktop': 960,
    'tablet': 768,
    'mobile': 480,
    'small': 400
  },
  width: {
    'auto': 'auto',
    'full': '100%',
    '600': '600px',
    '900': '896px'
  }
};
