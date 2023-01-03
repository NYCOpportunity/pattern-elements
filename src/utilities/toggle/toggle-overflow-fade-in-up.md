This is a combination of the "overflow" and "fade in up" animations. Adding the class `hidden:overflowFadeInUp` will animate the `max-height` property of the parent element. Adding `animated` to any immediate (`.parent > .child`) children of the parent will animate the opacity property fo the child.

---

The animation will be disabled by devices using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank" rel="noopener nofollow">prefers-reduced-motion</a> `@media` query.
