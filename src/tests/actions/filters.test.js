import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action option', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set start date action option', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action option', () =>{
    const text = 'text'
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    });
});

test('should generate set text filter action option with defaults', () =>{
    const text = 'text'
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action object for sort by date', () =>{
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('should generate action object for sort by AMOUNT', () =>{
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});