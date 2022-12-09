Buttons in the {{ this.package.nice }} are the same as the <a href="https://designsystem.digital.gov/components/breadcrumb" target="_blank" rel="noopener">Button Component in the U.S. Web Design System (USWDS)</a> and follow similar usage guidelines. A button element without the `btn` class appears as other links do. It is the same semantically as other buttons and can be used for in-page functionality when space is limited for styled button elements.

---

Styled buttons may be used as links. However, a consistent [type](#button-types) class (unstyled, styled, primary, secondary, or tertiary), and an icon should be used for buttons styled as links. See the [link button](#link-button) and [external link button](#external-link-button) for icon references below.

---

Buttons should be written using the `button` element. However, if a button is an `a` element styled with the .btn class and has in-page functionality (such as toggling elements), the role attribute should be set to "button," and the `tabindex` attribute should be set to "0." Refer to the best practices illustrated in the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Best_practices" target="_blank" rel="noopener">MDN documentation for the “button” role</a>.

---

If the button is a `button` element and appears within a `form` tag, the type attribute should be explicitly set to "button," "reset," or “submit." By default (without the type attribute) `button` elements are set to the “submit” type in forms.

---

Buttons may have an icon prefix or postfix next to the label, but they should never be only icons.

---

Further Button guidance can be found on the <a href="https://designsystem.digital.gov/components/button" target="_blank" rel="noopener">USWDS site</a>.