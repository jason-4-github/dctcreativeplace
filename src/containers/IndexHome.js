import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Row, Col, Menu, Modal, Form, Icon, Input, Button, Checkbox } from 'antd';

import HomePage from './HomePageContainer';
import ProductList from './ProductList';
import Questions from './QuestionContainer';

const { Header, Content, Footer } = Layout;
const FormItem = Form.Item;

class IndexHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
    this.showModal = this.showModal.bind(this);
    this.modalOnCancel = this.modalOnCancel.bind(this);
  }
  // control modal is open or not
  modalOnCancel() {
    this.setState({ visible: false });
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  // control header nav
  navClick() {
    return (
      <Row>
        <Col span={10} style={{ color: 'black', fontSize: '20px' }}>
          <Link to={'/'} className="headerLink">LOGO + TITLE</Link>
        </Col>
        <Col span={14}>
          <Menu
            theme="dark"
            mode="horizontal"
            className="headerMenu"
          >
            <Menu.Item key="0" ><Link to={'/productList'} className="headerLink">Product</Link></Menu.Item>
            <Menu.Item key="1" ><Link to={'/questions'} className="headerLink">Q&A</Link></Menu.Item>
            <Menu.Item key="2" ><div onClick={this.showModal} className="headerLink">登入</div></Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
  // control the login form in the modal
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Layout className="layout">
          <Header className="header">
            {this.navClick()}
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/questions" exact component={Questions} />
              <Route path="/productList" exact component={ProductList} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Col span={12}>
              Contact us
            </Col>
            <Col span={12}>
              ©2017 Created by DCT and Jason Hsu
            </Col>
          </Footer>
        </Layout>
        <Modal
          title={null}
          className="homePageModal"
          visible={this.state.visible}
          width="40%"
          footer={null}
          onCancel={this.modalOnCancel}
        >
          <Col span={4} />
          <Col span={16} className="modalImgDiv">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <br />
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                <br />
                Or <a href="">register now!</a>
              </FormItem>
            </Form>
          </Col>
          <Col span={4} />
        </Modal>
      </Row>
    );
  }
}

const IndexHomeAndLoginForm = Form.create()(IndexHome);

export default IndexHomeAndLoginForm;