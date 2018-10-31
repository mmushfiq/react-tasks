import { GET_CURRENCY_LIST, GET_MOST_USED_CURRENCY_LIST } from '../actions/actions';

const DEFAULT_STATE = {
    currencyData: [{ name: 'Manat', nominal: 1, value: 1, code: 'AZN' }],
    mostUsedCurrencyData: []
}

export default function task5Reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_CURRENCY_LIST:
            const currencyData = [...currencyData, action.payload];
            return { ...state, currencyData };
        case GET_MOST_USED_CURRENCY_LIST:
            return { ...state, mostUsedCurrencyData: action.payload };
        default:
            return state;

    }
}