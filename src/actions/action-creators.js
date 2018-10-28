import { UPDATE_COUNTER } from './actions';
import { ADD_GUESS_INFO, ADD_SELECTED_NUMBER } from './actions';
import { UPDATE_COUNTRY_LIST } from './actions';
import { UPDATE_COUNTRY } from './actions';

export const updateCounter = counter => (
    {
        type: UPDATE_COUNTER,
        payload: counter
    }
)

export const addSelectedNumber = selectedNumber => (
    {
        type: ADD_SELECTED_NUMBER,
        payload: selectedNumber
    }
)

export const addGuessInfo = guess => (
    {
        type: ADD_GUESS_INFO,
        payload: guess
    }
)

export const updateCountryList = countryList => (
    {
        type: UPDATE_COUNTRY_LIST,
        payload: countryList
    }
)

export const updateCountry = country => (
    {
        type: UPDATE_COUNTRY,
        payload: country
    }
)