import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencyListService } from './../../services/service';
import { Table, InputNumber, Select, Icon } from 'antd';

const Option = Select.Option;

class Task5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input1Val: 0,
            input2Val: 0,
            select1Val: 1,
            select2Val: 1
        }
    }

    componentDidMount() {
        this.props.dispatchGetCurrencyList();
    }

    cur1InputChange = (value) => {
        this.setState({ input1Val: value }, () => this.converter());
    }

    cur2InputChange = (value) => {
        // this.setState({input2Val: value})
        console.log("Do nothing!")
    }

    cur1SelectChange = (value) => {
        this.setState({ select1Val: value }, () => this.converter());
    }

    cur2SelectChange = (value) => {
        this.setState({ select2Val: value }, () => this.converter());
    }

    converter = () => {
        const { input1Val, select1Val, select2Val } = this.state
        const input2NewVal = select1Val * input1Val / select2Val
        this.setState({input2Val: Math.round(input2NewVal * 10000) / 10000 })
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
                <h1>Task 5</h1>
                <center>
                    <InputNumber value={this.state.input1Val} onChange={this.cur1InputChange} style={{width: 150, marginRight: 10 }} />
                    <Select
                        value={this.state.select1Val}
                        style={{ width: 100 }}
                        onChange={this.cur1SelectChange}
                    >
                        <Option key='AZN' value={1}>AZN</Option>
                        {currencyData.map(currency => <Option key={currency.code} value={currency.value/currency.nominal}>{currency.code}</Option>)}
                    </Select>

                    <Icon type="export" style={{ padding: '0 15px', fontSize: '18px', color: '#08c' }} />

                    <InputNumber value={this.state.input2Val} onChange={this.cur2InputChange} style={{ width: 150, marginRight: 10 }} disabled />
                    <Select
                        value={this.state.select2Val}
                        style={{ width: 100 }}
                        onChange={this.cur2SelectChange}
                    >
                        <Option key='AZN' value={1}>AZN</Option>
                        {currencyData.map(currency => <Option key={currency.code} value={currency.value/currency.nominal}>{currency.code}</Option>)}
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
