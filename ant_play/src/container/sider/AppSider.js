import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

class AppSider extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Sider width={200}
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style={{ overflow: 'auto', height: '100vh', left: 0 }}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" /><span>Items</span></span>}>
                        <Menu.Item key="1">Items</Menu.Item>
                        <Menu.Item key="2">Price Lists</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" /> <span>subnav 2</span></span>}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" /> <span>subnav 3</span></span>}>
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default AppSider