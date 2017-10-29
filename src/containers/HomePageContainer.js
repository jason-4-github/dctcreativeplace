import React from 'react';
import { Layout, Menu, Row, Col, Card } from 'antd';
import _ from 'lodash';

const { Header, Content, Footer } = Layout;

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cardFunction = this.cardFunction.bind(this);
  }
  cardFunction() {
    const cards = [];
    _.times(8, (key, value) => {
      cards.push(
        <Col span={6} style={{ textAlign: 'center', paddingTop: '15px' }} key={key}>
          <Card bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
            <div className="custom-card">
              <h3>Europe Street beat</h3>
              <p>www.instagram.com</p>
            </div>
          </Card>
        </Col>
      );
    });
    return cards;
  }
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
            <Row gutter={16}>
              <Col span={24}>
                <div className="contentTitle">
                  <Row className="imgDiv">
                    <Col span={4} />
                    <Col span={16} className="labelBackground" />
                    <Col span={4} />
                  </Row>
                </div>
              </Col>
              <Col span={3} />
              <Col span={18}>
                {this.cardFunction()}
              </Col>
              <Col span={3} />
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2017 Created by Jason Hsu
          </Footer>
        </Layout>
      </Row>
    );
  }
}

export default HomePageContainer;