import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../components/NotFound';

describe('NotFound', () => {
	it('should render without throwing an error', () => {
		expect(shallow(<NotFound/>)).toMatchSnapshot();
	});
});
