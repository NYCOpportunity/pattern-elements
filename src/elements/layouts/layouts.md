The Opportunity Standard provides a few basic layouts.

uses a {{ this.tokens.grid }} grid system by default for dimensions and spacing between elements. The base value for the grid is stored in the `--nyco-grid` CSS custom property, and all spacing values are determined using the the `calc()` function with `--nyco-grid` and a multiplier.

The default spacing value is `{{ this.tokens.spacing.DEFAULT }}`.