"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var curry_1=require("./curry"),isFunction=curry_1.default(function(t){var r=Object.prototype.toString.call(t);return/(Function)\]$/.test(r)&&!!(t&&t.constructor&&t.call&&t.apply)});exports.default=isFunction;