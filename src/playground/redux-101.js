import {createStore} from 'redux';

//Axtion generationt - functions that return action objects
const add = (data)=>{
    return data.a + data.b;
};
console.log(add({a:400, b:20}));
    //if there cool if not equal 1
const incrementCount = ( {incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 69} = {})=>({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({setBy = 420} = {})=>({
    type: 'SET',
    setBy
});
const resetCount = ({setCount = 0} = {})=>({
    type: 'RESET',
    setCount
});

// Reducers
const countReducer = (state={count:0}, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: state.count *action.setCount * 0
            };
        case 'SET':
            return{
                count: action.setBy
            };
        default:
            return state;
    }
};

//define state and action didnot set an actionntype
const store = createStore(countReducer);
//executed whenever store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions - object that gets sewnt to the store
//increment

/*store.dispatch({ //dispatch lets us send an action object
    type: 'INCREMENT',
    incrementBy: 5
});*/


store.dispatch(incrementCount({incrementBy: 69}))

store.dispatch(decrementCount({decrementBy: 489}))
store.dispatch(setCount({setBy: 69}))
store.dispatch(resetCount({setCount: 420}))
//store.dispatch(incrementCount());

