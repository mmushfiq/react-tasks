import { updateCountryList, updateCountry } from "../actions/action-creators";
import axios from 'axios';

export const updateCountryListService = region => dispatch => {
    let countryList = []
    axios
        .get('https://restcountries.eu/rest/v2/region/' + region)
        .then(res => {
            res.data.map(data => {
                console.log(data['name']);
                // countryList.push(data['name'])
                countryList = [...countryList, data['name']]
            })
            return countryList;
        })
        .then(countryList => {
            dispatch(updateCountryList(countryList));
            dispatch(updateCountry(countryList[0]));
        })
        .catch(err => {
            console.error("error occurs -> ", err);
        })
}