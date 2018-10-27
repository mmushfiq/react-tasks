import React, { Component } from 'react';
import { Form, InputNumber, Button } from 'antd';

const FormItem = Form.Item;

function validatePrimeNumber(selectedNumber, number) {
    console.log("selectedNumber: " + selectedNumber + ", number: " + number)
    if (number === selectedNumber) {
        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }
    const errorMessage = number > selectedNumber ? 'less than' : 'more than'
    return {
        validateStatus: 'error',
        errorMsg: 'Your number should be ' + errorMessage + ' ' + number,
    };
}

class Task4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: Math.ceil(Math.random() * 100),
            number: {
                value: 0,
            },
        };
    }

    // handleNumberChange = (value) => {
    //     const selectedNumber = this.state.selectedNumber
    //     this.setState({
    //         number: {
    //             ...validatePrimeNumber(selectedNumber, value),
    //             value,
    //         },
    //     });
    // }

    handleGuessNumber = () => {
        const selectedNumber = this.state.selectedNumber
        const value = this.state.number.value;
        validatePrimeNumber(selectedNumber, this.state.number.value)
        this.setState({
            number: {
                ...validatePrimeNumber(selectedNumber, value),
                value,
            },
        });
    }

    render() {
        console.log("selectedNumber number: ", this.state.selectedNumber)
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 },
        };
        const number = this.state.number;
        const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
        return (
            <div>
                <h1>Task 4</h1>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="Prime between 1 & 100"
                        validateStatus={number.validateStatus}
                        help={number.errorMsg || tips}
                    >
                        <InputNumber
                            min={1}
                            max={100}
                            value={number.value}
                            // onChange={this.handleNumberChange}
                            onChange={(v) => this.setState({ number: { value: v } })}
                        />
                    </FormItem>
                    <FormItem>
                        <Button type='primary' onClick={this.handleGuessNumber}>Guess</Button>
                    </FormItem>

                </Form>
            </div>
        );
    }
}

export default Task4