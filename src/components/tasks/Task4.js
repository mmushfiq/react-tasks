import React, { Component } from 'react';
import { InputNumber, Button, Table, Modal } from 'antd';
import { connect } from 'react-redux';
import { addGuessInfo, addSelectedNumber } from '../../actions/action-creators';

class Task4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1,
            desc: 'You should guess number between 1 and 100!',
            info: '',
            color: 'red',
            stepCount: 0,
            visible: false,
        };
    }

    handleChange = (value) => {
        this.setState({ inputValue: value })
    }

    handleGuessNumber = () => {
        const selectedNumber = this.props.selectedNumber
        const value = this.state.inputValue;
        const stepCount = this.state.stepCount + 1;
        this.setState({ stepCount })

        if (value === selectedNumber) {
            this.setState({ info: 'Congrats! You find correct number!' })
            this.setState({ color: 'green' })
            const guess = { number: value, stepCounts: stepCount }
            this.props.dispatchAddGuessInfo(guess)
            setTimeout(() => this.showModal(), 1000);
        } else {
            const helper = value > selectedNumber ? 'less than <' : 'more than >'
            this.setState({ info: 'You should choose number which ' + helper + ' ' + value })
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.props.dispatchAddSelectedNumber(Math.ceil(Math.random() * 100))
        this.setState({ stepCount: 0, color: 'red', info: '', inputValue: 1, visible: false, })
    }

    handleCancel = (e) => {
        this.setState({ visible: false, });
    }

    render() {
        const { color } = this.state
        const dataSource = this.props.guessData;
        const columns = [
            {
                title: 'Selected Number',
                dataIndex: 'number',
                key: 'number',
            }, {
                title: 'Number of Attempts',
                dataIndex: 'stepCounts',
                key: 'stepCounts',
            },
        ];

        return (
            <div>
                <h1>Task 4</h1>
                <center>
                    <h3>{this.state.desc}</h3>
                    <br />
                    <InputNumber
                        min={1}
                        max={100}
                        defaultValue={1}
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <span style={{ margin: '10px' }}></span>
                    <Button type='primary' onClick={this.handleGuessNumber}>Guess</Button>
                    <p style={{ marginTop: '15px', marginBottom: '40px', color: color }}>{this.state.info}</p>
                    <Table dataSource={dataSource} columns={columns} />

                    <Modal
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p>Do you want to start again?</p>
                    </Modal>
                </center>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        guessData: state.task4Store.guessData,
        selectedNumber: state.task4Store.selectedNumber
    };
}

const mapDispatchToProps = (dispatch) => ({
    dispatchAddGuessInfo(guess) {
        dispatch(addGuessInfo(guess));
    },
    dispatchAddSelectedNumber(number) {
        dispatch(addSelectedNumber(number));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Task4)
