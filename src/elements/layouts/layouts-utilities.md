

Utility        | Description
---------------|-
`wrap`         | The wrap class adds default spacing on both sides of the container element (rendered as yellow in the demonstration below). This utility ensures a comfortable amount of window spacing for text and other elements for mobile and desktop browsers.
`page-max`     | The page maximum class sets the container element's maximum width to `--nyco-dimension-site-max-width` which equals `{{ this.tokens.dimension.site-max-width }}`. The value for the `--nyco-grid` is `{{ this.tokens.grid }}`. This limits the element from growing beyond this width in larger desktop browsers.
`page-min`     | The page minimum class sets the container element's minimum width to `--nyco-dimension-site-min-width` which equals `{{ this.tokens.dimension.site-min-width }}`. The value for the `--nyco-grid` is `{{ this.tokens.grid }}`. This prevents the element's width from shrinking below this width.
`page-min-max` | The page minimum and maximum class sets the container element's maximum and minimum widths to the dimensions described above.