import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expense from '../fixtures/expense';

let onSubmit, history, wrapper;

beforeEach(() => {
    //spies
    onSubmit = jest.fn();
    history = {push: jest.fn()};
    //wrapper
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {

    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () =>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
    //check botch calls
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenCalledWith(expense[1]);
});