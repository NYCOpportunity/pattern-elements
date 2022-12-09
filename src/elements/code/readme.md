<!-- Headers start with h5 ##### -->

##### Global Script

Code requires JavaScript for syntax highlighting. The {{ this.package.nice }} uses <a href="https://highlightjs.org/" target="_blank" rel="noopener">highlight.js</a> to and a helper utility to provide syntax highlighting. To use the code highlight utility through the global script use the following code:

```html
<script src="{{ this.package.name }}/{{ this.global.dist }}/{{ this.global.entry.scripts }}"></script>

<script>
  var Standard = new {{ this.global.entry.name }}();

  Standard.codeHighlight();
</script>
```

This will instantiate the utility.

##### Module Import

To use the utility directly import the module from the source.

```javascript
import CodeHighlight from '@nycopportunity/pattern-elements/src/elements/code/code-highlight';

new CodeHighlight();
```

##### Configuration

The utility can be configured by passing and object `{}` with any of the following properties.

Property   | Description
-----------|-
`script`   | The CDN URL for the highlight.js JavaScript. Defaults to loading version `9.18.1` via JsDelivr.
`link`     | The CDN URL for the highlight.js stylesheet. Defaults to loading version `9.18.1` via JsDelivr.
`syntax`   | The languages to support. Defaults to HTML, CSS, JavaScript, and Sass.
`callback` | The callback method to execute when the script loads. Defaults to a configuration for highlight.js and adds all all `pre` tags to the tabbing order by setting their tabindex to "0".
