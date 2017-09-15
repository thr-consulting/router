'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = SwitchWithError;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _NotFound = require('./components/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_ChildrenArray = require('react').babelPluginFlowReactPropTypes_proptype_ChildrenArray || require('prop-types').any;

function SwitchWithError(props) {
	return _react2.default.createElement(
		_reactRouterDom.Switch,
		null,
		props.children,
		_react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
	);
}
SwitchWithError.propTypes = {
	children: typeof babelPluginFlowReactPropTypes_proptype_ChildrenArray === 'function' ? babelPluginFlowReactPropTypes_proptype_ChildrenArray.isRequired ? babelPluginFlowReactPropTypes_proptype_ChildrenArray.isRequired : babelPluginFlowReactPropTypes_proptype_ChildrenArray : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ChildrenArray).isRequired
};