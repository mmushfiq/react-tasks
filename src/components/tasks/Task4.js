import React, { Component } from 'react';
import { Form, InputNumber, Button } from 'antd';

const FormItem = Form.Item;

class Task4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: Math.ceil(Math.random() * 100),
            inputValue: 1,
            desc: 'You should guess number between 1 and 100!',
            info: '',
            color: 'red'
        };
    }

    handleChange = (value) =>{
        console.log("value: ", value)
        this.setState({inputValue: value})
    }

    handleGuessNumber = () => {
        const selectedNumber = this.state.selectedNumber
        const value = this.state.inputValue;
        console.log("selectedNumber: " + selectedNumber + ", number: " + value)

        if(value === selectedNumber){
            this.setState({info: 'Congrats! You find correct number!'})
            this.setState({color: 'green'})
        } else {
            const helper = value > selectedNumber ? 'less than <' : 'more than >'
            this.setState({info: 'You should choose number which ' + helper + ' ' + value})
        }
    }

    render() {
        console.log("selectedNumber number: ", this.state.selectedNumber)
        const { color } = this.state

        return (
            <div>
                <h1>Task 4</h1>
                <center>
                    <h3>{this.state.desc}</h3>
                    <br/>
                    <InputNumber
                        min={1}
                        max={100}
                        defaultValue={1}
                        onChange={this.handleChange}
                    />
                    <span style={{margin: '10px'}}></span>
                    <Button type='primary' onClick={this.handleGuessNumber}>Guess</Button>
                    <p style={{marginTop: '15px', color: color}}>{this.state.info}</p>
                </center>
            </div>
        );
    }
}

export default Task4