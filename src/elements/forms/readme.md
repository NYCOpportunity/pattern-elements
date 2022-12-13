<!-- Headers start with h5 ##### -->

##### Global Script

Forms require JavaScript for validation and accessibility. To use validation through the global script use the following code. A optional selector targeting the form may be supplied as the first argument to the `.validate()` method. The second optional argument is a function which handles the form data after it passes validation.

```html
<form data-js="validate" action="/my/action/" method="post">
  <!-- Form questions here -->
</form>

<script src="{{ this.package.name }}/{{ this.global.dist }}/{{ this.global.entry.scripts }}"></script>

<script>
  var Standard = new {{ this.global.entry.name }}();

  Standard.validate();

  // or

  // Accepts a selector string (argument one) and function (argument two) for submission handling
  Standard.validate('[data-js="validate"]', function(event) {
    event.preventDefault();

    // Add your own custom submission handler here
  });
</script>
```

Validation messages will appear when the user...

* leaves a required question blank,

* enters an answer doesn't match the specified input type,

* enters an answer that does not match a specified pattern,

* or tries to submit the form without filling out any required fields.

For any of these conditions to be met...

* the <a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required">required attribute</a> on the `input` element must be set to `true`,

* or the input needs a valid <a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types">type attribute</a> value,

* or the <a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern">pattern attribute</a> must have a regular expression matching pattern. This is not needed for inputs with a specified type.


##### Module Import

The form validation source exists in the <a href="https://github.com/CityOfNewYork/patterns-scripts/" target="_blank" rel="noopener">Patterns Scripts</a> utility library. Install the `@nycopportunity/pttrn-scripts` module to import the module. This method allows the specification of watching for input errors on blur, setting the error container's selector, and other customizations. Refer to the the source for details.

```javascript
import Forms from '@nycopportunity/patterns-scripts/src/forms/forms';

this.form = new Forms(document.querySelector('[data-js="validate"]'));

this.form.submit = (event) => {
  event.preventDefault();
  // Submission handler
};

this.form.selectors.ERROR_MESSAGE_PARENT = '.c-question__container';

this.form.watch();
```
