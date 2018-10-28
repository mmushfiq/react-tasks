
import { UPDATE_COUNTRY_LIST, UPDATE_COUNTRY } from './../actions/actions';

const DEFAULT_STATE = {
    regionList: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    countryList: [],
    country: 'Choose country',
}

export default function task1Reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case UPDATE_COUNTRY_LIST:
            return { ...state, countryList: action.payload };
        case UPDATE_COUNTRY:
            return { ...state, country: action.payload };
        default:
            return state;

    }
}