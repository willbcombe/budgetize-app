import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expense from '../fixtures/expense';

test('should render ExpenseList w/ expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expense}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseList w/ expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});