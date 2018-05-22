import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expense from '../fixtures/expense';

let editExpense, removeExpense, history,  wrapper;

beforeEach(() => {
    //spies
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    //wrapper
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            history={history}
            expense ={expense[2]}
        />);
});

test('should render EditExpensePage correctly', () => {

    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[2]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expense[2].id, expense[2]);
});

test('should handle on remove', () =>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({
        id: expense[2].id
    });
});
