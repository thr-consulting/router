'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tmargin-top: 2rem !important;\n'], ['\n\tmargin-top: 2rem !important;\n']);

exports.default = NotFound;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable global-require */


// language=LESS prefix=dummy{ suffix=}
var StyledGrid = (0, _styledComponents2.default)(_semanticUiReact.Grid)(_templateObject);

function NotFound() {
	return _react2.default.createElement(
		StyledGrid,
		{ container: true, relaxed: true, centered: true, stackable: true, columns: 'equal' },
		_react2.default.createElement(
			_semanticUiReact.Grid.Column,
			{ verticalAlign: 'middle', width: '5' },
			_react2.default.createElement(
				_semanticUiReact.Header,
				{ as: 'h2' },
				'Page Not Found'
			),
			_react2.default.createElement(
				'p',
				null,
				'The page you are trying to access does not exist.'
			)
		),
		_react2.default.createElement(
			_semanticUiReact.Grid.Column,
			{ textAlign: 'center', width: '5' },
			_react2.default.createElement(_semanticUiReact.Image, { size: 'small', src: require('../../img/towtruck.png'), alt: 'Page Not Found' })
		)
	);
}