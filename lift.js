"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var maybe_1=require("./maybe"),curry_1=require("./curry"),lift=function(){return curry_1.default(function(e,r){return maybe_1.default.nullable(e(r))})};exports.default=lift;