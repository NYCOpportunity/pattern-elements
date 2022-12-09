'use strict';

class CodeHighlight {
  /**
   * Initializes Highlight.js
   *
   * @return  {Object}  Instance of Code
   */
  constructor(s = {}) {
    this.link = (s.hasOwnProperty('link')) ? s.link : CodeHighlight.link;

    this.script = (s.hasOwnProperty('script')) ? s.script : CodeHighlight.script;

    this.syntax = (s.hasOwnProperty('syntax')) ? s.syntax : CodeHighlight.syntax;

    this.callback = (s.hasOwnProperty('callback')) ? s.callback : CodeHighlight.callback;

    /**
     * Link
     */

    if (this.link) {
      let link = document.createElement('link');

      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', this.link);

      document.head.appendChild(link);
    }

    /**
     * Script
     */

    if (this.script) {
      let script = document.createElement('script');

      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', this.script);

      script.onload = () => {
        if (this.callback) {
          this.callback(this.syntax);
        }
      }

      document.head.appendChild(script);
    }

    return this;
  }
}

/** @var  {String}  link  CDN for the hightlight.js CSS */
CodeHighlight.link = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/default.min.css';

/** @var  {String}  script  CDN for the hightlight.js Script */
CodeHighlight.script = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js';

CodeHighlight.syntax = ['html', 'javascript', 'css', 'sass'];

/** @var  {Function}  callback  Method to execute when the highlight.js script loads */
CodeHighlight.callback = function(syntax) {
  hljs.configure({
    languages: syntax
  });

  document.querySelectorAll('pre').forEach(function(pre) {
    if (!pre.hasAttribute('tabindex')) {
      pre.setAttribute('tabindex', '0');
    }

    hljs.highlightBlock(pre);
  });
}

export default CodeHighlight;
