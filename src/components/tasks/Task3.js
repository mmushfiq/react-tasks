import React, { Component } from 'react';
import { Button, Icon, Card } from 'antd';

const ButtonGroup = Button.Group;

class Task3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textContent: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            t: null,
            now: null,
        }
    }

    componentDidMount() {
        this.displayRealTime();
    }

    displayRealTime = () => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        const now = h + ":" + m + ":" + s;
        this.setState({ now })
        var t = setTimeout(() => this.displayRealTime(), 500);
    }

    checkTime = (i) => {
        if (i < 10) { i = "0" + i };
        return i;
    }

    add = () => {
        let { seconds, minutes, hours } = this.state
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        const textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        this.setState({ seconds, minutes, hours, textContent })
        this.timer();
    }

    timer = () => {
        this.setState({ t: setTimeout(() => this.add(), 1000) })
    }

    handleStart = () => {
        this.timer();
    }

    handleStop = () => {
        const { t } = this.state;
        clearTimeout(t);
    }

    handleReset = () => {
        this.setState({ seconds: 0, minutes: 0, hours: 0, textContent: '00:00:00' });
    }

    render() {
        return (
            <div>
                <h1>Task 3</h1>
                <center>
                    <h3 id="txt" style={{ fontSize: '26px', letterSpacing: '2px', marginBottom: '30px', color: 'green' }}><time>{this.state.now}</time></h3>

                    <Card
                        title={<h2 style={{ fontSize: '26px', letterSpacing: '2px' }} ><time>{this.state.textContent}</time></h2>}
                        style={{ width: 300 }}
                    >
                        <ButtonGroup>
                            <Button onClick={this.handleStart} size='large'>
                                <Icon type="play-circle" style={{ fontSize: '22px', color: '#08c' }} />
                            </Button>
                            <Button onClick={this.handleStop} size='large'>
                                <Icon type="pause-circle" style={{ fontSize: '22px', color: '#08c' }} />
                            </Button>
                            <Button onClick={this.handleReset} size='large'>
                                <Icon type="sync" style={{ fontSize: '22px', color: '#08c' }} />
                            </Button>
                        </ButtonGroup>
                    </Card>
                </center>
            </div>
        )
    }
}

export default Task3