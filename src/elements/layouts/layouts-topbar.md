The **Topbar Layout** creates an application view with a fixed height topbar suited for tablet devices. The layout contains is a single-column container with a fixed-height header region and a vertically scrollable content region.

---

The first element, the header region, will have a fixed height of `{{ this.tokens.dimension.topbar-height }}`. The scrollable content region's height will stretch to the end of the layout container. The entire layout container will have a fixed height of `100vh` of the viewport.