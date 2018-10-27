import { UPDATE_COUNTER } from '../actions/actions';

const DEFAULT_STATE = {
    counter: 0,
}

export default function task1Reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case UPDATE_COUNTER:
            return { ...state, counter: action.payload };
        default:
            return state;

    }
}