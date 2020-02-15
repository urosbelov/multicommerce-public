import React, { Component } from "react";
import { Row, Col, Menu, Button, Card } from "antd";
import { Route, Switch } from "react-router-dom";
import history from "../../utils/history";

import ProfileEdit from "./Edit";
import Media from "./Media";
import Trust from "./Trust";
import Reviews from "./Reviews";

class Profile extends Component {
  clickEdit() {
    history.push("/profile/edit");
  }
  clickMedia() {
    history.push("/profile/media");
  }
  clickTrust() {
    history.push("/profile/trust");
  }
  clickReviews() {
    history.push("/profile/reviews");
  }
  clickDashboard() {
    history.push("/dashboard");
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
              <Menu.Item key="1" onClick={this.clickEdit}>
                <b>Izmenite profil</b>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.clickMedia}>
                <b>Fotografija</b>
              </Menu.Item>
              <Menu.Item key="3" onClick={this.clickTrust}>
                <b>Pouzdanost i verifikacija</b>
              </Menu.Item>
              <Menu.Item key="4" onClick={this.clickReviews}>
                <b>Ocene</b>
              </Menu.Item>
              <Menu.Item key="5">
                <b>Reference</b>
              </Menu.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 16
                }}
              >
                <Button block onClick={this.clickDashboard}>
                  <b>Pregledajte profil</b>
                </Button>
              </div>
            </Menu>
          </Col>
          <Col span={17}>
            <Switch>
              <Route path="/profile/edit" component={ProfileEdit} />
              <Route path="/profile/media" component={Media} />
              <Route path="/profile/trust" component={Trust} />
              <Route path="/profile/reviews" component={Reviews} />
            </Switch>
          </Col>
        </Card>
      </Row>
    );
  }
}

export default Profile;
