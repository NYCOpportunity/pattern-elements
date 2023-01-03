The **Toggle** utility shows or hides targeted regions based on user interaction. Dynamic ARIA attributes and classes on both the toggling element and target of the toggle are used to provide screen reader support.

---

For `button` toggling elements, the `aria-controls` attribute is used to find the target region by its ID. For `a` elements, the `href` attribute is used to find the target region by its ID.

---

The class `hidden` will be added to the target region when it is hidden. The class `active` will be added to both the toggling element and target region when the element is visible.

---

Potentially focusable elements in the target region will have their `tabindex` toggled to allow or prevent them from receiving focus. If the target region is hidden before the page loads, the `tabindex` for these elements need to be set to `-1`. Elements that can be selected by the following strings will have their `tabindex` toggled.

```javascript
'a', 'button', 'input', 'select', 'textarea', 'object', 'embed', 'form', 'fieldset', 'legend', 'label', 'area', 'audio', 'video', 'iframe', 'svg', 'details', 'table', '[tabindex]', '[contenteditable]', '[usemap]'
```

---

The use of the `aria-expanded` attribute on the toggling element is recommended to announce the visibility of the target region. Optionally, the attribute `aria-pressed` can be used instead to announce that the toggle button is "pressed" or "not pressed." These attributes provide different feedback to screenreaders and are appropriate for different component types. `aria-expanded` would be used for patterns such as <a href="https://inclusive-components.design/collapsible-sections/" target="_blank" rel="nofollow noindex">collapsible sections</a> and `aria-pressed` would be used for <a href="https://inclusive-components.design/toggle-button/" target="_blank" rel="nofollow noindex">toggle buttons</a> or **switches**.

---

Placement of the target should follow the toggling element so that it appears next in order on the page for screen readers. For targets that are far apart or appear in a different section of the page, the [Anchor Toggle](#anchor-toggle) may be more appropriate.

---

The **Toggle** utility supports having more than one toggle element per toggle target.
