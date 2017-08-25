import React from 'react';
import {shallow} from 'enzyme';
import Unauthorized from '../components/Unauthorized';

describe('Unauthorized', () => {
	it('should render without throwing an error', () => {
		expect(shallow(<Unauthorized/>)).toMatchSnapshot();
	});
});
