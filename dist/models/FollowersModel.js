"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var FollowerSchema = new Schema({});

var FollowersModel = _mongoose["default"].model("Follower", FollowerSchema);

module.exports = FollowersModel;