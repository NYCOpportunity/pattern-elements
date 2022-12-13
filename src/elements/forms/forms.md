Forms in the {{ this.package.nice }} follow the usage guidelines of the <a href="https://designsystem.digital.gov/components/form-controls/" target="_blank" rel="noopener nofollow">U.S. Web Design System (USWDS) Form Component</a>. Forms use different **Question Patterns** to gather specific pieces of information. More information about these patterns can be found on the [Question page](/question).

##### Validation and Accessibility

Proper markup and aria labeling are required for each Question. They appear similar stylistically but there is a difference in the markup between questions with one or multiple inputs. Proper `id`, `name`, and `aria` attributes are also required for labels, option inputs, SVG icons, and validation messages.

---

[Questions](/question) use validation from the <a href="https://github.com/CityOfNewYork/patterns-scripts/tree/main/src/forms" target="_blank" rel="nofollow">Patterns Scripts</a> utility library. This script will display visual feedback regarding missing or invalid answers and toggle appropriate `aria` attributes to announce feedback to screen readers. The `aria-live="polite"` attribute on the message declares error messages that are not visible in the default state.

---

The `aria-invalid="true"` attribute illustrates to screen readers that the input is not valid, and the `aria-describedby` attribute indicates the input's error description.

---

Validity is assessed using the <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api" target="_blank" rel="noopener">Constraint Validation API</a> based on values of the `type`, `required`, and `pattern` attributes. If any validity constraints are not met, then the localized `validationMessage` is displayed. Examples include "This field is required" or "Please provide a valid ..."

---

Validation occurs on the **blur event** or when the user shifts focus away from the input.
