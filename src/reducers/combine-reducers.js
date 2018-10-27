import task1Reducer from './reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    task1Store: task1Reducer
})