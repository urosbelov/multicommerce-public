import React, { Component } from "react";
import { Descriptions, Button } from "antd";

class Settings extends Component {
  handleDeactivate = () => {
    console.log("Deactivate Account Button");
  };

  render() {
    return (
      <div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Deaktivirajte nalog">
            <Button type="primary" onClick={this.handleDeactivate}>
              <b> Deaktivirajte Vaš nalog</b>
            </Button>
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default Settings;
