# load all symbols from svg file for use inline - for webpack

## Installation

`npm install svg-symbol2inline-loader`

## Usage

``` javascript
var icons = require("svg-symbol2inline!./file.svg");
var rawText = icons('iconbyid');
// => returns symbol content wrapped in svg->g
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)