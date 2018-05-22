import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('shjould set up remove expense action object', ()=>{
    const action = removeExpense({id:'123abc'});
    //use toEqual for arrays and opbjects
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('shjould set up edit expense action object', ()=>{
    const action = editExpense('123abc', {note:'chicken'});
    //use toEqual for arrays and opbjects
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'chicken'
        }
    });
});

test('shjould set up add expense action object with provided value ', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'last months rent'
    };
    const action = addExpense(expenseData)
    //use toEqual for arrays and opbjects
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:  expect.any(String)
        }
    });
});

test('shjould set up add expense action object with provided value ', ()=>{
    const action = addExpense();
    //use toEqual for arrays and opbjects
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
}); 
