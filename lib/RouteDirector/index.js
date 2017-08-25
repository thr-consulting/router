// @flow

import React, {Component} from 'react';
import type {Element} from 'react';
import PropTypes from 'prop-types';
import {clearAllMessages} from '@thx/messages';
import debug from 'debug';
import Reroute from '../Reroute';
import SwitchWithError from '../SwitchWithError';

const d = debug('thx:RouteDirector');

type RouteType = {
	path: string,
	exact?: boolean,
	strict?: boolean,
	redirect?: boolean,
	permissions?: string | string[],
	layout: Element<*>,
};

type Props = {
	routes: RouteType[],
	defaults?: {
		exact?: boolean,
		strict?: boolean,
		redirect?: boolean,
		permissions?: string | string[],
		layout: Element<*>,
	}
};

export default class RouteDirector extends Component<Props> {
	static contextTypes = {
		store: PropTypes.object,
	};

	componentWillUpdate() {
		clearAllMessages(this.context.store);
	}

	props: Props;

	doRender = (props: any, route: RouteType) => {
		d('Rendering route', props, route);
		// $FlowFixMe
		return <route.layout route={route} {...props}/>;
	};

	render() {
		d('Render', this.props);
		const defaultRoute = this.props.defaults ? this.props.defaults : {};

		return (
			<SwitchWithError>
				{this.props.routes.map(route => {
					const theRoute = Object.assign({}, defaultRoute, route);
					return <Reroute key={theRoute.path} render={props => this.doRender(props, theRoute)} {...theRoute}/>;
				})}
			</SwitchWithError>
		);
	}
}
