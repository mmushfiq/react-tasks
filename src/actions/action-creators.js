import { UPDATE_COUNTER } from './actions';
import { ADD_GUESS_INFO, ADD_SELECTED_NUMBER } from './actions';
import { UPDATE_COUNTRY_LIST, UPDATE_COUNTRY } from './actions';
import { GET_CURRENCY_LIST, GET_MOST_USED_CURRENCY_LIST } from './actions';

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

export const getCurrencyList = currencyData => (
    {
        type: GET_CURRENCY_LIST,
        payload: currencyData
    }
)

export const getMostUsedCurrencyList = mostUsedCurrencyData => (
    {
        type: GET_MOST_USED_CURRENCY_LIST,
        payload: mostUsedCurrencyData
    }
)