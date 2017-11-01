import React from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Modal } from 'antd';
import _ from 'lodash';

import downIcon from './../images/downIcon.png';

const { Header, Content, Footer } = Layout;

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modalImgUrl: '',
    }
    this.cardFunction = this.cardFunction.bind(this);
    this.showModal = this.showModal.bind(this);
    this.modalOnCancel = this.modalOnCancel.bind(this);
  }
  modalOnCancel() {
    this.setState({ visible: false });
  }
  showModal(imgUrl) {
    this.setState({
      visible: true,
      modalImgUrl: imgUrl,
    });
  }
  cardFunction() {
    const cards = [];
    _.times(8, (key, value) => {
      cards.push(
        <Col span={8} style={{ textAlign: 'center', paddingTop: '15px' }} key={key}>
          <Card bodyStyle={{ padding: 0 }} onClick={(e) => { this.showModal(e.target.src); }}>
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
                    <Col span={16} className="labelBackground">
                      <h1>進站圖片或標語</h1>
                      <img className="downIcon animated infinite bounce" src={downIcon} alt="" />
                    </Col>
                    <Col span={4} />
                  </Row>
                </div>
              </Col>
              <Col span={24} style={{ textAlign: 'center' }}>
                <b style={{ fontSize: '30px' }}>產品列表</b>
              </Col>
              <Col span={3} />
              <Col span={18} className="placeListDiv">
                {this.cardFunction()}
              </Col>
              <Col span={3} />
              <Col className="middleImgDiv" span={24}>
                <Col span={4} />
                <Col span={16} className="labelBackground">
                  <h1>特色宣傳</h1>
                </Col>
                <Col span={4} />
              </Col>
              <Col className="homePageIntro" span={24}>
                <Col span={12} className="subHomePageIntro">
                  <Icon type="shop" className="subHomePageIntroIcon" />
                  <br />
                  <b className="subHomePageIntroWords">
                    For Landlord
                    <br />
                    Some Description...
                  </b>
                </Col>
                <Col span={12} className="subHomePageIntro">
                    <Icon type="team" className="subHomePageIntroIcon"/>
                    <br />
                    <b className="subHomePageIntroWords">
                      For Tenant
                      <br />
                      Some Description...
                    </b>
                </Col>
              </Col>
            </Row>
            <Modal
              title={null}
              className="homePageModal"
              visible={this.state.visible}
              width="80%"
              footer={null}
              onCancel={this.modalOnCancel}
            >
              <Col span={12} className="modalImgDiv">
                <img src={this.state.modalImgUrl} alt="" style={{ maxWidth: '80%', maxHeight: '70vh' }} />
              </Col>
              <Col span={12} className="modalImgDiv">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <br />
                <button>進入產品明細</button>
              </Col>
            </Modal>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Col span={12}>
              Contact us
            </Col>
            <Col span={12}>
              ©2017 Created by Jason Hsu
            </Col>
          </Footer>
        </Layout>
      </Row>
    );
  }
}

export default HomePageContainer;