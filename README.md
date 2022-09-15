# Pattern Elements (WIP)

Shared elements for the NYC Opportunity UI Patterns Framework. Currently a work–in-progress. Refer to [architecture diagram for roadmap and planning](https://www.figma.com/file/jpvfMN4UETOvjQG9EJoH4n/Patterns-Architecture?node-id=0%3A1). This repository works with the  [Patterns Typography](https://github.com/NYCOpportunity/pattern-typography) module, however, typography can be swapped out depending on the project needs.

## Installation

This assumes you have scaffolded a [Patterns CLI](https://github.com/cityofnewyork/patterns-cli#i-want-to) project ("Quick start a new project").

```shell
npm install @nycopportunity/pattern-elements @nycopportunity/pattern-typography
```

Add the module include paths to the array configuration in the **config/sass.js** file.

```javascript
/**
 * Config
 *
 * @type {Object}
 */
const sass = {
  sourceMapEmbed: true,
  includePaths: [
    `${process.env.PWD}/src/`,
    `${process.env.PWD}/node_modules/`,
    `${process.env.PWD}/node_modules/@nycopportunity/pattern-elements/src/`,  // +
    `${process.env.PWD}/node_modules/@nycopportunity/pattern-typography/src/` // +
  ]
};
```

Add the module Sass import directives in in the **src/scss/_imports.scss** file.

```scss
/** Elements */
@forward '@nycopportunity/pattern-typography/src/scss/imports'; // This module includes @font-face and needs to be imported before all other declarations.
@forward '@nycopportunity/pattern-elements/src/scss/imports';
/** Elements - end */
```

