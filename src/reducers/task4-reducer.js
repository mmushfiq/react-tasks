import { ADD_GUESS_INFO, ADD_SELECTED_NUMBER } from '../actions/actions';

const DEFAULT_STATE = {
    selectedNumber: Math.ceil(Math.random() * 100),
    guessData: []
}

export default function task4Reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ADD_SELECTED_NUMBER:
            return { ...state, selectedNumber: action.payload };
        case ADD_GUESS_INFO:
            const guessData = [...state.guessData, action.payload];
            return { ...state, guessData };
        default:
            return state;

    }
}