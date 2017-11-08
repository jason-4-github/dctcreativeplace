import React from 'react';
import { TimePicker, Row, Col, DatePicker } from 'antd';

class ProductList extends React.Component {
  onChange(time, timeString) {
    console.log(time, timeString);
  }

  render() {
    return (
      <div id="productListContainer">
        <Row>
          <Col span={6} />
          <Col span={3}>
             <DatePicker onChange={this.onChange} />
          </Col>
          <Col span={3}>
            <TimePicker
              use12Hours
              format="h:mm a"
              onChange={this.onChange}
              style={{ width: '100%' }}
              placeholder="請選擇起始時間"
            />
          </Col>
          <Col span={3}>
            <TimePicker
              use12Hours
              format="h:mm a"
              onChange={this.onChange}
              style={{ width: '100%' }}
              placeholder="請選擇結束時間"
            />
          </Col>
          <Col span={9} />
        </Row>
        <h1>Product</h1><br />
        <h1>Product</h1><br />
        <h1>Product</h1><br />
        <h1>Product</h1><br />
        <h1>Product</h1><br />
        <h1>Product</h1><br />
      </div>
    );
  }
}

export default ProductList;