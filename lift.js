"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var either_1=require("./either"),maybe_1=require("./maybe"),curry_1=require("./curry");exports.liftToMaybe=function(){return curry_1.default(function(e,r){return maybe_1.default.nullable(e(r))})},exports.liftToEither=function(){return curry_1.default(function(e,r){return either_1.default.nullable(e(r))})};