# orientation-service

Want to keep your users in landscape mode? This package will handle it all for you"

# Installation

```bash
# Using npm:
 
npm i orientation-service

# Using yarn:

yarn add orientation-service
```

# Usage

## HTML:

```html
<div id="orientationOverlay"></div>
```

## Javascript:
```js
import { orientationService } from 'orientation-service';

orientationService({
        landscapePages: ['/Orientation-Service/demo/index.html'],
        devMode: true,
        overlay: 'orientationOverlay',
        bgColor: '#000',
        mobileOnly: true,
});
```

## Options

* *landscapePages* - _array_ (List of paths that require  landscape mode) - Required
* *devMode* - _boolean_ (Defines if package should run in development mode or not) - Defaults to false
* *overlay* - _string_ (`ID` of element to use as overlay) - Defaults to `orientationOverlay`
* *bgColor* - _string_ (Defines the color of the background, all valid css is valid here) - Defaults to #000
* *mobileOnly* - _boolean_ (Defines if the package should only be enabled on mobile devices) - Defaults to true