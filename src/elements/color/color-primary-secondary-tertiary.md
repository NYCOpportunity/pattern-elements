Primary, secondary, and tertiary color assignments are used for interactive elements (such as links and buttons) and highlighting areas of emphasis (such as alerts and badges). The assignments for the primary, secondary, and tertiary colors use a specific tint or shade from the main assignment to ensure adequate contrast in each theme.

<div class="w-full flex mb-3 text-center">
  <div class="flex-1 aspect-video bg-primary">
    <input value="bg-primary" class="sr-only" data-copy-target="copy-bg-primary-value" tabindex="-1">
    <button class="rounded w-full h-full justify-center items-center" title="Copy background color to clipboard" aria-label="Copy background color to clipboard" aria-pressed="false" data-copy="copy-bg-primary-value" data-js="copy">
      <svg class="icon-ui text-scale-0" aria-hidden="true">
        <use href="#lucide-copy">
      </svg>
    </button>
  </div>
  <div class="flex-1 aspect-video bg-secondary">
    <input value="bg-secondary" class="sr-only" data-copy-target="copy-bg-secondary-value" tabindex="-1">
    <button class="rounded w-full h-full justify-center items-center" title="Copy background color to clipboard" aria-label="Copy background color to clipboard" aria-pressed="false" data-copy="copy-bg-secondary-value" data-js="copy">
      <svg class="icon-ui text-scale-0" aria-hidden="true">
        <use href="#lucide-copy">
      </svg>
    </button>
  </div>
  <div class="flex-1 aspect-video bg-tertiary">
    <input value="bg-tertiary" class="sr-only" data-copy-target="copy-bg-tertiary-value" tabindex="-1">
    <button class="rounded w-full h-full justify-center items-center" title="Copy background color to clipboard" aria-label="Copy background color to clipboard" aria-pressed="false" data-copy="copy-bg-tertiary-value" data-js="copy">
      <svg class="icon-ui text-scale-0" aria-hidden="true">
        <use href="#lucide-copy">
      </svg>
    </button>
  </div>
</div>

<button class="btn-small" data-js="themes">
  <svg aria-hidden="true" class="icon-ui">
    <use data-js-themes="icon" href="#lucide-moon"></use>
  </svg>
  <span>Click to view <span class="lowercase" data-js-themes="label">Theme</span> colors</span>
</button>
