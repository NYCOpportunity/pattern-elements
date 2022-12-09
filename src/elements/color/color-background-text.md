The **background** and **body text** are assigned initial colors with adequate contrast in both themes using the class `bg` on the document `body`.

<div class="material rounded bg mb-3">
  <div class="p-4">
    <p>Body text color. The background color is set to this element's container.</p>
  </div>
</div>

Additionally, there are assignments for **brand,** **alternative** and **emphasized** text colors. Each assignment is available as a CSS color utility using [Tailwindcss](/tailwindcss).

<div class="material rounded bg mb-3">
  <div class="p-4">
    <p><b class="h4 text-brand">Brand Color</b></p>
    <p class="text-alt">Alternative text color.</p>
    <p><b class="text-em">Text color with emphasis.</b></p>
    <p>Utility classes for brand, alternative, and emphasis text are <code>text-brand</code>, <code>text-alt</code>, or <code>text-em</code> respectively.</p>
  </div>
</div>

<button class="btn-small mb-3" data-js="themes">
  <svg aria-hidden="true" class="icon-ui">
    <use data-js-themes="icon" href="#lucide-moon"></use>
  </svg>
  <span>Click to view <span class="lowercase" data-js-themes="label">Theme</span> background and text</span>
</button>

##### Global Objects

Global objects and other components use different background color assignments to distinguish their position or draw attention to themselves in the user interface (UI). For example, the [Navigation](/navigation), [Menu](/menu), and [Attribution](/attribution) global elements all use different background color assignments.

<div class="flex justify-center pt-3 pb-6">
  <iframe style="width: {{ this.tokens.screen.small }}; margin: 0 auto" height="628" src="{{ this.baseUrl }}/demos/global.html" class="border-4 border-scale-3" tabindex="-1"></iframe>
</div>

##### Alerts

The default, primary, secondary, and tertiary [Alerts](/alert) are assigned background and text color corresponding with their urgency.

<div class="c-alert mb-3" role="region" aria-label="Additional Information">
  <div class="c-alert__graphic">
    <svg class="icon-ui" role="img">
      <title>Information</title>
      <use href="#lucide-info"></use>
    </svg>
  </div>

  <div class="c-alert__body">
    <p><b>Default</b> status alert background and text color for general alert callouts.</p>
  </div>
</div>

<div class="c-alert c-alert-status-primary mb-3" role="status">
  <div class="c-alert__graphic">
    <svg class="icon-ui" role="img">
      <title>Information</title>
      <use href="#lucide-info"></use>
    </svg>
  </div>

  <div class="c-alert__body">
    <p><b>Primary</b> status alert background and text color for <b>informational</b> messages.</p>
  </div>
</div>

<div class="c-alert c-alert-status-secondary mb-3" role="status">
  <div class="c-alert__graphic">
    <svg class="icon-ui" role="img">
      <title>Success</title>
      <use href="#lucide-check-circle"></use>
    </svg>
  </div>

  <div class="c-alert__body">
    <p><b>Secondary</b> status alert background and text color for <b>success</b> messages.</p>
  </div>
</div>

<div class="c-alert c-alert-status-tertiary mb-3" role="alert">
  <div class="c-alert__graphic">
    <svg class="icon-ui" role="img">
      <title>Warning</title>
      <use href="#lucide-alert-triangle"></use>
    </svg>
  </div>

  <div class="c-alert__body">
    <p><b>Tertiary</b> status alert background and text color for <b>warning</b> messages.</p>
  </div>
</div>

<p>Utility classes for primary, secondary, and tertiary Alerts are <code>c-alert-status-primary</code>, <code>c-alert-status-secondary</code>, or <code>c-alert-status-tertiary</code> respectively.</p>

<button class="btn-small mb-3" data-js="themes">
  <svg aria-hidden="true" class="icon-ui">
    <use data-js-themes="icon" href="#lucide-moon"></use>
  </svg>
  <span>Click to view <span class="lowercase" data-js-themes="label">Theme</span> alert background and text</span>
</button>

##### Buttons

The default, primary, secondary, and tertiary [Buttons](/buttons#button-types) are assigned background and text color corresponding with their type.

<div class="flex mb-3 justify-center">
  <div class="grid gap-3">
    <button class="btn">
      <span>Default Button</span>
    </button>
    <button class="btn-primary">
      <span>Primary Button</span>
    </button>
    <button class="btn-secondary">
      <span>Secondary Button</span>
    </button>
    <button class="btn-tertiary">
      <span>Tertiary Button</span>
    </button>
  </div>
</div>

<p>Utility classes for primary, secondary, and tertiary Buttons are <code>btn-primary</code>, <code>btn-secondary</code>, or <code>btn-tertiary</code> respectively.</p>

<button class="btn-small" data-js="themes">
  <svg aria-hidden="true" class="icon-ui">
    <use data-js-themes="icon" href="#lucide-moon"></use>
  </svg>
  <span>Click to view <span class="lowercase" data-js-themes="label">Theme</span> button background and text</span>
</button>
