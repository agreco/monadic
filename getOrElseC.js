!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./curry"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("./curry").default(function(e,t){return t.getOrElse(e)});t.default=r});