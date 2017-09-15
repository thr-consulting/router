'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loading() {
	return _react2.default.createElement(
		_semanticUiReact.Segment,
		{ basic: true },
		_react2.default.createElement(
			_semanticUiReact.Dimmer,
			{ active: true, inverted: true },
			_react2.default.createElement(_semanticUiReact.Loader, null)
		)
	);
}