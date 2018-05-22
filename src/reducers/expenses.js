
//expense reducer *******************************************

const expenseReducerDefaultState=[];

export default (state = expenseReducerDefaultState, action) => {
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

