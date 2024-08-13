import React, { Component } from 'react';
import { Layout } from 'antd';
import './Container.css';

import AppHeader from './header/AppHeader';
import AppSider from './sider/AppSider';

const { Content } = Layout;

class Container extends Component {

   
    render() {
        return (
            <Layout>
                <AppHeader />
                <Layout>
                    <AppSider />
                    <Layout > 
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Container