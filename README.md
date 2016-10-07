# ng2-sanitize

[![npm version](https://badge.fury.io/js/ng2-sanitize.svg)](https://www.npmjs.com/package/ng2-sanitize) 
Sanitize html integration with typescript for angular 2.

# Install
`npm i -s ng2-sanitize`

# Sample Usage

```js
import { SanitizeHtml, SanitizeResourceUrl, SanitizeScript, SanitizeStyle, SanitizeUrl } from 'ng2-sanitize';

@Component({
  template: `
  <div [innerHTML]="html | sanitizeHtml"></div>
  `
})
export class MyComponent {
    text:html = "<b>Welcome</b>";
}
```
