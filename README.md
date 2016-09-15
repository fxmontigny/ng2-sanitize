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