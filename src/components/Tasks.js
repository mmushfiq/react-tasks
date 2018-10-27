import React, { Component } from 'react';
import { Layout, Menu, Icon, Rate, Drawer, Button } from 'antd';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Task1 from './tasks/Task1';
import Task2 from './tasks/Task2';
import Task3 from './tasks/Task3';
import Task4 from './tasks/Task4';
import Task5 from './tasks/Task5';
import Task6 from './tasks/Task6'

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItemKey: "1",
            collapsed: false,
            visible: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        console.log("TASKS RENDER")
        const { Header, Sider, Content, Footer } = Layout;
        const key = this.state.menuItemKey;
        console.log("key value in render: ", key);

        return (
            <BrowserRouter>
                <Layout style={{ bottom: '0' }}>
                    <Header>
                        <div>
                            <Link style={{ color: 'white', float: 'left', fontSize: '20px', fontWeight: 'bold' }} to="/">React Tasks</Link>
                        </div>
                    </Header>
                    <Layout>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1" >
                                    <Icon type="user" />
                                    <span>Updated Dropdown</span>
                                    <NavLink to="/task1"></NavLink>
                                </Menu.Item>
                                <Menu.Item key="2" >
                                    <Icon type="customer-service" theme="outlined" />
                                    <span>Counter</span>
                                    <NavLink to="/task2"></NavLink>
                                </Menu.Item>
                                <Menu.Item key="3" >
                                    <Icon type="wallet" theme="outlined" />
                                    <span>Timer Task</span>
                                    <NavLink to="/task3"></NavLink>
                                </Menu.Item>
                                <Menu.Item key="4" >
                                    <Icon type="wallet" theme="outlined" />
                                    <span>Guess Number Game</span>
                                    <NavLink to="/task4"></NavLink>
                                </Menu.Item>
                                <Menu.Item key="5" >
                                    <Icon type="wallet" theme="outlined" />
                                    <span>Money Converter</span>
                                    <NavLink to="/task5"></NavLink>
                                </Menu.Item>
                                <Menu.Item key="6" >
                                    <Icon type="wallet" theme="outlined" />
                                    <span>Calculator</span>
                                    <NavLink to="/task6"></NavLink>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header>
                            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                <Route exact path="/" component={Task1} />
                                <Route path="/task1" component={Task1} />
                                <Route path="/task2" component={Task2} />
                                <Route path="/task3" component={Task3} />
                                <Route path="/task4" component={Task4} />
                                <Route path="/task5" component={Task5} />
                                <Route path="/task6" component={Task6} />
                                {/* <Route path="/providers" render={(routeProps) => <Providers {...routeProps} addProvider={this.handleAddProvider} providerList={this.state.providerList} />} />
                                <Route path="/services" render={(routeProps) => <Services {...routeProps} addService={this.handleAddService} serviceList={this.state.serviceList} />} />
                                <Route path="/charging" render={(routeProps) => <ManualCharging {...routeProps} onCharge={this.handleCharge} />} /> */}

                            </Content>
                        </Layout>
                    </Layout>
                    <Footer>
                        <center>
                            {/* <Button type="primary" onClick={this.showDrawer}>Rate</Button> */}
                            <Link to='#' onClick={this.showDrawer}>Rate</Link>
                            <Drawer
                                title="Please Rate"
                                placement="bottom"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <Rate />
                            </Drawer>
                        </center>
                    </Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default Tasks