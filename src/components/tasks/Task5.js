import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencyListService } from './../../services/service';
import { Table, InputNumber, Select, Icon } from 'antd';

const Option = Select.Option;

class Task5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cur1Val: 0,
            cur2Val: 0,
            cur1Code: '',
            cur2Code: ''
        }
    }

    componentDidMount() {
        this.props.dispatchGetCurrencyList();
    }

    cur1InputChange = (value) => {
        console.log("cur1 input value: ", value)
    }

    cur2InputChange = (value) => {
        console.log("cur2 input value: ", value)
    }

    cur1SelectChange = (value) => {
        console.log("cur1 select value: ", value)
        const { currencyData } = this.props.store;
        const  currency =currencyData['USD']
        console.log("rate: ", currency)
    }

    cur2SelectChange = (value) => {
        console.log("cur2 select value: ", value)
    }

    render() {

        const { currencyData } = this.props.store;
        const columns = [
            {
                title: 'Currency',
                key: 'name',
                render: (currency) => (
                    <span>
                        {currency.nominal}  {currency.name}
                    </span>
                ),
            }, {
                title: 'Code',
                dataIndex: 'code',
                key: 'code',
            }, {
                title: 'Rate',
                dataIndex: 'value',
                key: 'value',
            },
        ];

        return (
            <div>
                <h1>Task 5 <span>(not completed..)</span></h1>
                <center>
                    <InputNumber style={{ width: 150 }} defaultValue={0} value={this.state.cur1Val} onChange={this.cur1InputChange} />
                    <span> &nbsp; </span>
                    <Select
                        defaultValue={currencyData['code']}
                        value={this.state.cur1Code}
                        style={{ width: 100 }}
                        onChange={this.cur1SelectChange}
                    >
                        {currencyData.map(currency => <Option key={currency.code} value={currency.value}>{currency.code}</Option>)}
                    </Select>

                    <span> &nbsp; </span>
                    <Icon type="export" style={{ padding: '0 15px', fontSize: '18px', color: '#08c' }} />
                    <span> &nbsp; </span>

                    <InputNumber style={{ width: 150 }} defaultValue={0} value={this.state.cur2Val} onChange={this.cur2InputChange} />
                    <span> &nbsp; </span>
                    <Select
                        defaultValue={''}
                        value={this.state.cur2Code}
                        style={{ width: 100 }}
                        onChange={this.cur2SelectChange}
                    >
                        {currencyData.map(currency => <Option key={currency.code}>{currency.code}</Option>)}
                    </Select>
                </center>
                <div style={{ marginTop: 50 }}>
                    <h4 style={{ textAlign: 'left' }}>Daily AZN Rates by Central Bank</h4>
                    <Table dataSource={currencyData} columns={columns} />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state.task5Store
    };
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetCurrencyList() {
        dispatch(getCurrencyListService());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task5)
