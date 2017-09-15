'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _Reroute = require('../Reroute');

var _Reroute2 = _interopRequireDefault(_Reroute);

var _SwitchWithError = require('../SwitchWithError');

var _SwitchWithError2 = _interopRequireDefault(_SwitchWithError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var d = (0, _debug2.default)('thx:router:RouteDirector');

/**
 * RouteDirector - Component that manages multiple root routes, layouts, and permissions
 * @class
 */
var RouteDirector = function (_Component) {
	_inherits(RouteDirector, _Component);

	function RouteDirector() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RouteDirector);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RouteDirector.__proto__ || Object.getPrototypeOf(RouteDirector)).call.apply(_ref, [this].concat(args))), _this), _this.doRender = function (props, route) {
			d('Rendering route: ' + route.path);
			// $FlowFixMe
			return _react2.default.createElement(route.layout, _extends({ route: route }, props));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RouteDirector, [{
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			if (this.props.onRouteChange) this.props.onRouteChange();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			d('Rendering RouteDirector');
			var defaultRoute = this.props.defaults ? this.props.defaults : {};

			return _react2.default.createElement(
				_SwitchWithError2.default,
				null,
				this.props.routes.map(function (route) {
					var theRoute = Object.assign({}, defaultRoute, route);
					return _react2.default.createElement(_Reroute2.default, _extends({ key: theRoute.path, render: function render(props) {
							return _this2.doRender(props, theRoute);
						} }, theRoute));
				})
			);
		}
	}]);

	return RouteDirector;
}(_react.Component);

RouteDirector.contextTypes = {
	store: _propTypes2.default.object
};
RouteDirector.propTypes = {
	routes: require('prop-types').arrayOf(require('prop-types').shape({
		path: require('prop-types').string.isRequired,
		exact: require('prop-types').bool,
		strict: require('prop-types').bool,
		redirect: require('prop-types').bool,
		permissions: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').arrayOf(require('prop-types').string)]),
		layout: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
	})).isRequired,
	defaults: require('prop-types').shape({
		exact: require('prop-types').bool,
		strict: require('prop-types').bool,
		redirect: require('prop-types').bool,
		permissions: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').arrayOf(require('prop-types').string)]),
		layout: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
	}),
	onRouteChange: require('prop-types').func
};
RouteDirector.propTypes = {
	routes: require('prop-types').arrayOf(require('prop-types').shape({
		path: require('prop-types').string.isRequired,
		exact: require('prop-types').bool,
		strict: require('prop-types').bool,
		redirect: require('prop-types').bool,
		permissions: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').arrayOf(require('prop-types').string)]),
		layout: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
	})).isRequired,
	defaults: require('prop-types').shape({
		exact: require('prop-types').bool,
		strict: require('prop-types').bool,
		redirect: require('prop-types').bool,
		permissions: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').arrayOf(require('prop-types').string)]),
		layout: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
	}),
	onRouteChange: require('prop-types').func
};
exports.default = RouteDirector;