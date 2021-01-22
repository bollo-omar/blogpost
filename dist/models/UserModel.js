"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;

var UserModel = _mongoose["default"].model('User', new _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    unique: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: 1,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}));

var _default = UserModel;
exports["default"] = _default;