import task1Reducer from './task1-reducer';
import task2Reducer from './task2-reducer';
import task4Reducer from './task4-reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    task1Store: task1Reducer,
    task2Store: task2Reducer,
    task4Store: task4Reducer
})