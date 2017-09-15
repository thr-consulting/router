'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bundle = function (_Component) {
	_inherits(Bundle, _Component);

	function Bundle() {
		_classCallCheck(this, Bundle);

		return _possibleConstructorReturn(this, (Bundle.__proto__ || Object.getPrototypeOf(Bundle)).apply(this, arguments));
	}

	_createClass(Bundle, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.load(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.load !== this.props.load) {
				this.load(nextProps);
			}
		}
	}, {
		key: 'load',
		value: function load(props) {
			var _this2 = this;

			this.setState({
				mod: null
			});
			props.load(function (mod) {
				_this2.setState({
					// handle both es imports and cjs
					mod: mod.default ? mod.default : mod
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return this.props.children(this.state.mod);
		}
	}]);

	return Bundle;
}(_react.Component);

Bundle.propTypes = {
	load: require('prop-types').func.isRequired,
	children: require('prop-types').any.isRequired
};
Bundle.propTypes = {
	load: require('prop-types').func.isRequired,
	children: require('prop-types').any.isRequired
};
exports.default = Bundle;