import { GET_CURRENCY_LIST, GET_MOST_USED_CURRENCY_LIST } from '../actions/actions';

const DEFAULT_STATE = {
    currencyData: [],
    mostUsedCurrencyData: []
}

export default function task5Reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_CURRENCY_LIST:
            return { ...state, currencyData: action.payload };
        case GET_MOST_USED_CURRENCY_LIST:
            return { ...state, mostUsedCurrencyData: action.payload};
        default:
            return state;

    }
}