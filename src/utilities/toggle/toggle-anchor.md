The anchor toggle uses an anchor in the `href` to jump to the target element. While anchor toggles are an appropriate use case for target elements that are further away from the toggling element, it should be used sparingly as anchor links can make the navigation of content more difficult. Always use descriptive text in the link such as "Jump to" to describe what the behavior of the link will be.

---

Anchor target regions will have their `tabindex` attribute set to `-1` to shift focus from the toggle element to the target element.
