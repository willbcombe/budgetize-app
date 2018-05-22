import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import expense from '../fixtures/expense';

test('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expense[0]} />);
    expect(wrapper).toMatchSnapshot();
});
