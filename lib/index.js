'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SYSADMIN = exports.checkPermissions = exports.lazy = exports.RouteDirector = exports.SwitchWithError = exports.Reroute = undefined;

var _Reroute = require('./Reroute');

var _Reroute2 = _interopRequireDefault(_Reroute);

var _SwitchWithError = require('./SwitchWithError');

var _SwitchWithError2 = _interopRequireDefault(_SwitchWithError);

var _RouteDirector = require('./RouteDirector');

var _RouteDirector2 = _interopRequireDefault(_RouteDirector);

var _lazy = require('./lazy');

var _lazy2 = _interopRequireDefault(_lazy);

var _checkPermissions = require('./checkPermissions');

var _checkPermissions2 = _interopRequireDefault(_checkPermissions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Reroute = _Reroute2.default;
exports.SwitchWithError = _SwitchWithError2.default;
exports.RouteDirector = _RouteDirector2.default;
exports.lazy = _lazy2.default;
exports.checkPermissions = _checkPermissions2.default;
exports.SYSADMIN = _checkPermissions.SYSADMIN;