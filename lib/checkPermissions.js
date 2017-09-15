'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYSADMIN = undefined;
exports.default = checkPermissions;

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SYSADMIN = exports.SYSADMIN = 'sysadmin';

function permissionsMatch(havePermissions, needPermissions) {
  var have = (0, _isArray2.default)(havePermissions) ? havePermissions : [havePermissions];
  var need = (0, _isArray2.default)(needPermissions) ? [].concat(_toConsumableArray(needPermissions), [SYSADMIN]) : [needPermissions, SYSADMIN];
  return (0, _intersection2.default)(have, need).length > 0;
}

/**
 * Compares an auth object against a permission or list of permissions.
 * @param auth - Must be an immutable auth object
 * @param needPermissions - Array or string of permissions
 * @returns {boolean}
 */
function checkPermissions(auth, needPermissions) {
  if (!auth.userId) return false;
  return permissionsMatch(auth.get('permissions'), needPermissions);
}