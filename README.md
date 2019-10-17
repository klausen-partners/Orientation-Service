# orientation-service

![GitHub repo size](https://img.shields.io/github/repo-size/klausen-partners/orientation-service)
![npm bundle size](https://img.shields.io/bundlephobia/min/@kogp/orientation-service@1.0.0)
![GitHub](https://img.shields.io/github/license/klausen-partners/orientation-service)
![npm (tag)](https://img.shields.io/npm/v/@kogp/orientation-service/latest)

Want to keep your users in landscape mode? This package will handle it all for you in only a few steps.
[1.5~KB](https://bundlephobia.com/result?p=@kogp/orientation-service@1.0.0) Simple package with no dependencies and no nonsense.

![Demo](https://media.giphy.com/media/hs1kmYqXhTVUggDaSR/giphy.gif)

# Installation

```bash
# Using npm:
 
npm i @kogp/orientation-service

# Using yarn:

yarn add @kogp/orientation-service
```

# Usage

## HTML:

Place the following code snippet inside the `<body>` tag before the `</body>` tag.

```html
<div id="orientationOverlay">
    <h1 style="margin: auto;text-align: center;font-weight: normal;font-family: serif;">Please turn your device orientation</h1>
</div>
```

## Javascript:
```js
import { orientationService } from '@kogp/orientation-service';

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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU](https://github.com/klausen-partners/Orientation-Service/blob/master/LICENSE)