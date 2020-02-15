import React, { Component } from "react";
import { Descriptions } from "antd";

class PaymentMethods extends Component {
  render() {
    return (
      <div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Način plaćanja">1</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default PaymentMethods;
