import React, { Component } from "react";
import { Descriptions, Tabs } from "antd";

const { TabPane } = Tabs;

class Reviews extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" key="1">
          <TabPane tab="Vaše ocene" key="2">
            <Descriptions layout="vertical" bordered>
              <Descriptions.Item label="Ranije ocene">1</Descriptions.Item>
            </Descriptions>
          </TabPane>
          <TabPane tab="Ocene" key="3">
            <Descriptions
              style={{ marginBottom: 16 }}
              layout="vertical"
              bordered
            >
              <Descriptions.Item label="Za ocenjivanje">1</Descriptions.Item>
            </Descriptions>
            <Descriptions layout="vertical" bordered>
              <Descriptions.Item label="Ocenili ste">1</Descriptions.Item>
            </Descriptions>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Reviews;
