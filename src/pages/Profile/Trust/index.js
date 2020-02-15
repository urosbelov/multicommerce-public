import React, { Component } from "react";
import { Descriptions } from "antd";

class Trust extends Component {
  render() {
    return (
      <div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Vaši verifikovani podaci">
            Verifikovano
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default Trust;
