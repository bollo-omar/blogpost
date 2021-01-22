"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

module.exports = {
  server: {
    port: process.env.PORT || process.env._PORT
  },
  auth: {
    SECRET: process.env._SECRET
  },
  env: process.env.NODE_ENV || "development"
};