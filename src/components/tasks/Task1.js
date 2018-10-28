import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { updateCountryListService } from './../../services/service';
import { updateCountry } from './../../actions/action-creators';

const Option = Select.Option;

class Task1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestDone: false,
        }
    }

    componentDidMount() {
        const { regionList } = this.props.store;
        this.updateCountryList(regionList[0]);
    }

    updateCountryList = (region) => {
        this.props.dispatchUpdateCountryList(region);
    }

    handleRegionChange = (value) => {
        this.updateCountryList(value);
    }

    handleCountryChange = (value) => {
        this.props.dispatchUpdateCountry(value);
    }

    render() {
        const { regionList, countryList, country } = this.props.store
        return (
            <div>
                <h1>Task 1</h1>
                <center>
                    <Select
                        defaultValue={regionList[0]}
                        style={{ width: 220 }}
                        onChange={this.handleRegionChange}
                    >
                        {regionList.map(region => <Option key={region}>{region}</Option>)}
                    </Select>
                    <span> &nbsp; </span>
                    <Select
                        style={{ width: 220 }}
                        // defaultValue={country}
                        value={country}
                        onChange={this.handleCountryChange}
                    >
                        {countryList.map(country => <Option key={country}>{country}</Option>)}
                    </Select>
                </center>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state.task1Store
    };
}

const mapDispatchToProps = (dispatch) => ({
    // dispatchUpdateCountryList(countryList) {
    //     dispatch(updateCountryList(countryList));
    // },
    dispatchUpdateCountry(country) {
        dispatch(updateCountry(country));
    },
    dispatchUpdateCountryList(region) {
        dispatch(updateCountryListService(region));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task1)
