"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var PostSchema = new Schema({});

var PostModel = _mongoose["default"].model("PostModel", PostSchema);

module.exports = PostModel;