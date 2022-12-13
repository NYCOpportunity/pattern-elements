Below is a general list of percentages that describe the proportional occurance of colors in the UI palette. Generally, use of color should strike a balance between neutral and vibrant colors to effectively draw attention to elements that require a user's attention.

<ul class="p-0 list-none aspect-video flex mb-3">
  <li class="material h-full bg flex border-r-0" style="width: 50%">
    <span class="sr-only">Background Colors</span>
    <ul class="p-0 list-none h-full w-full flex">
      <li class="flex-1 h-full bg-scale-0">
        <span class="sr-only">Background Scale 0</span>
      </li>
      <li class="flex-1 h-full bg-scale-1">
        <span class="sr-only">Background Scale 0</span>
      </li>
      <li class="flex-1 h-full bg-scale-2">
        <span class="sr-only">Background Scale 0</span>
      </li>
      <li class="flex-1 h-full bg-scale-3">
        <span class="sr-only">Background Scale 0</span>
      </li>
      <li class="flex-1 h-full bg-scale-4">
        <span class="sr-only">Background Scale 0</span>
      </li>
    </ul>
  </li>

  <li class="material h-full bg-primary border-r-0" style="width: 25%">
    <span class="sr-only">Primary Color, 25%</span>
  </li>

  <li class="material h-full bg-secondary border-r-0" style="width: 15%">
    <span class="sr-only">Secondary Color, 15%</span>
  </li>

  <li class="material h-full bg-tertiary border-r-0" style="width: 5%">
    <span class="sr-only">Tertiary Color, 5%</span>
  </li>

  <li class="material h-full bg flex border-r-0" style="width: 5%">
    <span class="sr-only">Accent Colors</span>
    <ul class="p-0 list-none h-full w-full flex">
      <li class="flex-1 h-full bg-red">
        <span class="sr-only">Red, 2.5%</span>
      </li>
      <li class="flex-1 h-full bg-purple">
        <span class="sr-only">Purple, 2.5%</span>
      </li>
    </ul>
  </li>
</ul>

<button class="btn-small mb-3" data-js="themes">
  <svg aria-hidden="true" class="icon-ui">
    <use data-js-themes="icon" href="#lucide-moon"></use>
  </svg>
  <span>Click to view <span class="lowercase" data-js-themes="label">Theme</span> usage scale</span>
</button>

* The **background color scale** should be predominant in the UI at around 50%.

* The **primary color** should be the next with around 25% and **secondary color** at 15%.

* The **tertiary color** should only be utilized for 5% of the palette.

* **Accent colors**, either red or purple, should only be utilized for around 2.5% of the palette each.
