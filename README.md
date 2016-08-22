# ng2-ace

[![npm version](https://badge.fury.io/js/ng2-sanitize.svg)](https://www.npmjs.com/package/ng2-sanitize) 
Sanitize html integration with typescript for angular 2.

# Install
`npm i -s ng2-sanitize`

# Sample Usage

```js
import { SanitizeHtml } from 'ng2-sanitize';

@Component({
  directives: [SanitizeHtml],
  template: `
  <div [innerHTML]="html | sanitizeHtml"></div>
  `
})
export class MyComponent {
    text:html = "<b>Welcome</b>";
}
```

# Angular Cli
> angular-cli-build.js

```js
... 
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ...
      'ng2-sanitize/**/*.+(js|js.map)'
    ]
  });
};
...
```

> angular-cli-build.js

```js
... 
const map:any = {
    'ng2-sanitize': 'vendor/ng2-ace-editor'
};

/** User packages configuration. */
const packages:any = {
    'ng2-sanitize': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index.js'
    }
};
...
```

