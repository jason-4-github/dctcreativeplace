import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

class Type1Container extends React.Component {
  render() {
    return (
      <Row>
        <Layout className="layout">
          <Header className="header">
            <Col span={10} style={{ color: 'white', fontSize: '20px' }}>LOGO + TITLE</Col>
            <Col span={14}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                className="headerMenu"
              >
                <Menu.Item key="1" style={{ color: 'white' }}>nav 1</Menu.Item>
                <Menu.Item key="2" style={{ color: 'white' }}>nav 2</Menu.Item>
                <Menu.Item key="3" style={{ color: 'white' }}>nav 3</Menu.Item>
              </Menu>
            </Col>
          </Header>
          <Content className="content">
            <Col span={24}>
              <div style={{ background: '#fff', padding: 24, minHeight: 680, textAlign: 'center' }}><h1>Content1</h1></div>
            </Col>
            <Col span={24}>
              <div style={{ background: '#676262', padding: 24, minHeight: 680, textAlign: 'center' }}><h1>Content2</h1></div>
            </Col>
            <Col span={24}>
              <div style={{ background: '#ada6a6', padding: 24, minHeight: 680, textAlign: 'center' }}><h1>Content3</h1></div>
            </Col>
            <Col span={24}>
              <div style={{ background: '#d8bdbd', padding: 24, minHeight: 680, textAlign: 'center' }}><h1>Content4</h1></div>
            </Col>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2017 Created by Jason Hsu
          </Footer>
        </Layout>
      </Row>
    );
  }
}

export default Type1Container;