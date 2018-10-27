import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;
const countryData = ['Azerbaijan', 'Turkey', 'Germany'];
const cityData = {
    Azerbaijan: ['Baku', 'Ganja', 'Sumgayit'],
    Turkey: ['Istanbul', 'Ankara', 'Izmir'],
    Germany: ['Berlin', 'Frankfurt', 'Munhen'],
};

class Task1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: cityData[countryData[0]],
            secondCity: cityData[countryData[0]][0],
        }
    }

    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    }

    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
    }

    render() {
        const { cities } = this.state;
        return (
            <div>
                <h1>Task 1</h1>
                <center>
                    <Select
                        defaultValue={countryData[0]}
                        style={{ width: 120 }}
                        onChange={this.handleProvinceChange}
                    >
                        {countryData.map(province => <Option key={province}>{province}</Option>)}
                    </Select>
                    <span> &nbsp; </span>
                    <Select
                        style={{ width: 120 }}
                        value={this.state.secondCity}
                        onChange={this.onSecondCityChange}
                    >
                        {cities.map(city => <Option key={city}>{city}</Option>)}
                    </Select>
                </center>
            </div>
        )
    }
}

export default Task1