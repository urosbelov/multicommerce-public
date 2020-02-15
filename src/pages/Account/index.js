import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col, Menu, Button, Card } from "antd";
import history from "../../utils/history";

import Notifications from "./Notifications";
import PaymentMethods from "./PaymentMethods";
import Security from "./Security";
import Settings from "./Settings";

class Account extends Component {
  clickNotifications() {
    history.push("/account/notifications");
  }
  clickPaymentMethods() {
    history.push("/account/payment_methods");
  }
  clickSecurity() {
    history.push("/account/security");
  }
  clickSettings() {
    history.push("/account/settings");
  }
  render() {
    return (
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "100%" }}>
          <Col span={7}>
            <Menu
              className="menu"
              style={{ width: 256, border: 0 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="vertical"
            >
              <Menu.Item key="1" onClick={this.clickNotifications}>
                <b>Obaveštenja</b>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.clickPaymentMethods}>
                <b>Način plaćanja</b>
              </Menu.Item>

              <Menu.Item key="3" onClick={this.clickSecurity}>
                <b>Sigurnost</b>
              </Menu.Item>
              <Menu.Item key="4" onClick={this.clickSettings}>
                <b>Podešavanja</b>
              </Menu.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 16
                }}
              >
                <Button block>
                  <b>Pozovite prijatelje</b>
                </Button>
              </div>
            </Menu>
          </Col>
          <Col span={17}>
            <Switch>
              <Route path="/account/notifications" component={Notifications} />
              <Route
                path="/account/payment_methods"
                component={PaymentMethods}
              />
              <Route path="/account/security" component={Security} />
              <Route path="/account/settings" component={Settings} />
            </Switch>
          </Col>
        </Card>
      </Row>
    );
  }
}

export default Account;
