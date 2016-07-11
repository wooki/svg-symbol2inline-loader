# load symbol from svg file for use inline - for webpack

## Installation

`npm install svg-symbol2inline-loader`

## Usage

``` javascript
var fileContent = require("svg-symbol2inline!./file.svg?symbolid");
// => returns symbol content from the file wrapped in a g element
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)