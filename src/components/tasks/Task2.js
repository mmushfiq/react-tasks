import React, { Component } from 'react';
import { Button, Icon, Avatar } from 'antd';
import { connect } from 'react-redux';
import { updateCounter} from './../../actions/action-creators';

const ButtonGroup = Button.Group;

class Task2 extends Component {

    increase = () => {
        const count = this.props.count + 1;
        this.props.dispatchUpdateCounter(count);
    }

    decrease = () => {
        const count = this.props.count - 1;
        this.props.dispatchUpdateCounter(count);
    }

    reset = () => {
        const count = 0;
        this.props.dispatchUpdateCounter(count);
    }


    render() {
        console.log("Task 2");

        const count = this.props.count;
        console.log("count: ", count);
        console.log("props: ", this.props)

        return (
            <div>
                <h1>Task 2</h1>
                <center>
                    <Avatar style={{ backgroundColor: '#f5222d', verticalAlign: 'middle' }} size={60}>
                        {count}
                    </Avatar>
                    <p></p>
                    <ButtonGroup>
                        <Button onClick={this.decrease}>
                            <Icon type="minus" />
                        </Button>
                        <Button onClick={this.reset}>
                            <Icon type="sync" />
                        </Button>
                        <Button onClick={this.increase}>
                            <Icon type="plus" />
                        </Button>
                    </ButtonGroup>
                </center>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.task1Store.counter
    };
}

const mapDispatchToProps = (dispatch) => ({
    dispatchUpdateCounter(counter) {
        dispatch(updateCounter(counter));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task2)


