import React from 'react';
import { Modal } from 'antd';

class detailModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      visible: this.props.isModal || false,
    }
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return(
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        closable={true}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default detailModal;