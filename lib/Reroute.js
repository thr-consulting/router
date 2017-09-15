'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Reroute;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _checkPermissions = require('./checkPermissions');

var _checkPermissions2 = _interopRequireDefault(_checkPermissions);

var _Unauthorized = require('./components/Unauthorized');

var _Unauthorized2 = _interopRequireDefault(_Unauthorized);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/no-children-prop */


var d = (0, _debug2.default)('thx:router:Reroute');

function Reroute(_ref, context) {
	var component = _ref.component,
	    render = _ref.render,
	    children = _ref.children,
	    permissions = _ref.permissions,
	    redirect = _ref.redirect,
	    rest = _objectWithoutProperties(_ref, ['component', 'render', 'children', 'permissions', 'redirect']);

	var auth = context.store.getState().get('auth');
	var isAuthenticated = !!auth.get('userId'); // Whether the user is logged in or not
	var isAuthorized = permissions ? (0, _checkPermissions2.default)(auth, permissions) : true;

	d('Permissions required: ' + String(permissions) + ', isAuthenticated: ' + isAuthenticated + ', isAuthorized: ' + String(isAuthorized) + ', willRedirect: ' + String(redirect) + ', Path: ' + rest.path);

	// If redirect is true
	if (redirect) {
		return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
			render: function (_render) {
				function render(_x) {
					return _render.apply(this, arguments);
				}

				render.toString = function () {
					return _render.toString();
				};

				return render;
			}(function (props) {
				if (isAuthenticated && isAuthorized) {
					if (component) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: component }));
					if (render) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: render }));
					if (children) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { children: children }));
					return null;
				} // Render component if logged in and have permissions.
				if (isAuthenticated && !isAuthorized) return _react2.default.createElement(_Unauthorized2.default, null); // Render unauthorized if logged in but no permissions.
				// eslint-disable-next-line react/prop-types
				var from = props.location.pathname === '/signin' ? null : props.location;
				return _react2.default.createElement(_reactRouterDom.Redirect, {
					to: {
						pathname: '/signin',
						state: { from: from }
					}
				});
			})
		}));
	}

	// Not redirecting, just render null if not logged in or not authorized
	if (permissions && isAuthenticated && isAuthorized && component) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: component }));
	if (permissions && isAuthenticated && isAuthorized && render) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: render }));
	if (permissions && isAuthenticated && isAuthorized && children) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { children: children }));
	if (permissions) return _react2.default.createElement(_Unauthorized2.default, null);
	if (component) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: component }));
	if (render) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: render }));
	if (children) return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { children: children }));
	return null;
}

Reroute.propTypes = {
	component: require('prop-types').any,
	render: require('prop-types').any,
	children: require('prop-types').any,
	permissions: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').arrayOf(require('prop-types').string)]),
	redirect: require('prop-types').bool,
	path: require('prop-types').string.isRequired
};
Reroute.contextTypes = {
	store: _propTypes2.default.object
};

Reroute.propTypes = {
	redirect: _propTypes2.default.bool,
	component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
	render: _propTypes2.default.func,
	children: _propTypes2.default.func,
	permissions: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
};