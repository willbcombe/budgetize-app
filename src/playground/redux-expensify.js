import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD EXPENSE ACTION GENERATOR
const addExpense = (
    {
        description='',
        note='',
         amount=0,
          createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(), //generates random id
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE --USE TO RETURN NEW ARRAY
const removeExpense = ({id} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE---------------------------
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_EXPENSE_FILTER--------------------
const setTextFilter = (text = '')=>({
    type: 'SET_TEXT_FILTER',
    text
});

//SET START DATE------------------------
const setStartDate = (startDate)=>({
    type: 'SET_START_DATE',
    startDate
});
//SET END DATE -------------------------
const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate
});

//SORT_BY_DATE-----------------------------
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT---------------------------
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
const expenseReducerDefaultState=[];

//expense reducer *******************************************
const  expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            //use concat method for arrays
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> //use to filter out
                id !== action.id // 
            );
        case 'EDIT_EXPENSE': //find match then change it
            return state.map((expense)=>{
                if(expense.id === action.id){
                    //reutnr brand new object
                    return {
                        ...expense, //grab entire expense object
                        ...action.updates //return new object override any passed down values
                    }
                }else{
                    return expense;
                }
            });
        default: 
            return state;
    }
};
//FILTERS REDUCER -manages part of filter object*************************
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer =(state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'
                };
        default:
            return state;
    }
};
//Filter filter object combined with expense array -------------
//timestamps (milliseconds) + =m fopward in time - = back in time

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, endDate}) => {
    return expenses.filter((expense)=> {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch &&  endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
};
//STORE CREATION***************************************************
const store = createStore(
    combineReducers({
        expenses: expenseReducer, //this is where array lives
        filters: filterReducer
    })
);

//track store
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses); // to track the store
});

//add objectst
const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 50000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 300, createdAt: -1000}));

//TEST ALL REDUCERS AND ACTION METHODS w/ dispacth calss
//store.dispatch(removeExpense({id: expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));

//just returns the expense action object
//console.log(expenseOne);

//track amount in pennies
const demoState = {
    expenses: [{
        id: 'qwerty',
        description: 'Groceries',
        note: 'bought food',
        amount: 6400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
