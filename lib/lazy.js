'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = lazy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Bundle = require('./Bundle');

var _Bundle2 = _interopRequireDefault(_Bundle);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lazy(component) {
	return function (props) {
		return _react2.default.createElement(
			_Bundle2.default,
			{ load: component },
			function (Comp) {
				return Comp ? _react2.default.createElement(Comp, props) : _react2.default.createElement(_Loading2.default, null);
			}
		);
	};
}