The **Map Layout** uses the [Sidebar Layout](#sidebar-layout) to create a map view suited for displaying a list of locations that also appear as points in the map. This enables users to find locations of offices or location-based services (or other location information).

---

The container has two columns for desktop viewports. The map occupies the second, larger region and the sidebar is the first region. On smaller viewports, the map region is stacked on top of the sidebar region and occupies `{{ this.tokens.dimension.map-height }}` of the screen.

---

The entire layout container (sidebar and map) will have a fixed height of `{{ this.tokens.dimension.map-container-height }}` of the viewport. This enables the sidebar region to be scrollable vertically to accommodate long lists or large amounts of content.
