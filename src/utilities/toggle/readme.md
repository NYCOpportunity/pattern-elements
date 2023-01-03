<!-- Headers start with h5 ##### -->

##### Global Script

The **Toggle** toggle requires JavaScript for functionality. It uses the <a href="https://github.com/CityOfNewYork/patterns-scripts/tree/main/src/toggle" target="_blank" rel="noopener nofollow">Patterns Scripts, Toggle Utility</a> to properly set ARIA and Class attributes on the toggle and target elements. To use the **Toggle** through the global script use the following code:

```html
<script src="{{ this.package.name }}/{{ this.global.dist }}/{{ this.global.entry.scripts }}"></script>

<script>
  var Standard = new {{ this.global.entry.name }}();

  Standard.toggle();
</script>
```

This will instantiate the **Theme** toggling element and attach event listeners to the body. It optionally accepts an object with settings for the <a href="https://github.com/CityOfNewYork/patterns-scripts/tree/main/src/toggle" target="_blank" rel="noopener nofollow">Patterns Scripts, Toggle Utility</a>, described below.

##### Module Import

The Toggle Utility source exists in the <a href="https://github.com/CityOfNewYork/patterns-scripts/" target="_blank" rel="noopener nofollow">Patterns Scripts</a> utility library, which is a dependency of this library. This method allows the specification of each theme object and a callback function that will be triggered after the theme is toggled.

```javascript
import Toggle from '@nycopportunity/pttrn-scripts/src/toggle/toggle';

new Toggle();
```

The `Toggle` instance optionally accepts an object with settings described below and in the <a href="https://github.com/CityOfNewYork/patterns-scripts/tree/main/src/toggle" target="_blank" rel="noopener nofollow">Patterns Scripts, Toggle Utility</a> documentation.

##### Attributes

Attributes such as `aria-controls`, `aria-expanded`, and `type` will help assistive technologies understand the relationship between the toggle element and the toggle target. These three attributes should be considered the bare minimum but they may be interchanged with others based on the use case. Below is an explanation of other possible attributes that can be used with the toggle utility. *Static* attributes will not change. *Dynamic* attributes will change when the toggle event is fired.

**Toggling Element Attributes**

Attribute       | State     | Importance    | Description
----------------|-----------|---------------|-
`aria-controls` | *static*  | required      | ID of the target element. Used by the toggle to select the target element.
`aria-expanded` | *dynamic* | recommended   | Boolean that announces that target content is "expanded" or "collapsed" when the toggling element is clicked.
`type`          | *static*  | recommended   | Setting a `<button>` element type to "button" will distinguish it from other button types, such as "submit" and "reset," but only within `<form>` elements. By default, a `<button>` is the type "submit" within a form.
`aria-pressed`  | *dynamic* | optional      | Boolean that announces that the toggling element is toggled. Not recommended for use with `aria-expanded`.
`role`          | *static*  | optional      | If the toggling element is not a `<button>` element, but looks and behaves like a button (see documentation for the [Button Element](buttons)), then setting the `role` attribute to "button" is recommended. See [MDN documentation for the "button" role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) for more information

**Target Region Attributes**

Attribute         | State     | Importance    | Description
------------------|-----------|---------------|-
`aria-hidden`     | *dynamic* | recommended   | Boolean that hides the content of the target element when "collapsed."
`role`            | *static*  | optional      | Setting the target element's `role` to "region" identifies the target as a significant area. See [MDN documentation for the "region" role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Region_role) for more information.
`aria-labelledby` | *static*  | optional      | This is used along with the `role` attribute to label the content of a "region." This can be set to the toggling elements `id` but can also be set to a different elements `id`.

##### Configuration

The Toggle Utility accepts an object `{}` with the following properties:

Option          | Type             | Importance | Description
----------------|------------------|------------|-
`selector`      | *string*         | optional   | Full selector string of the toggle element (this is passed to the `.matches()` method).
`inactiveClass` | *string/boolean* | optional   | Single class name that will be toggled on the toggle and target element when the element is inactive or "collapsed." Pass "false" to skip toggling an inactive class (there is no inactive class for the toggle element).
`activeClass`   | *string/boolean* | optional   | Single class name that will be toggled on the target element when the element is active or "expanded." Pass "false" to skip toggling an active class.
`before`        | *function*       | optional   | A function that will be executed before the toggling element and target classes and attributes are toggled. The function is passed the instance of the toggle class.
`after`         | *function*       | optional   | A function that will be executed after the toggling element and target classes and attributes are toggled. The function is passed the instance of the toggle class.
