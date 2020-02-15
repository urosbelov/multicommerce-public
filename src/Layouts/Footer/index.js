import React, { Component } from "react";
import { Row, Col, Divider } from "antd";
import LogoIcon from "./LogoIcon";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-layout">
        <Row>
          <Col span={6}>
            <ul>
              <li>Karijera</li>
              <li>Novosti</li>
              <li>Uslovi korišćenja</li>
              <li>Pomoć</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul>
              <li>Karijera</li>
              <li>Novosti</li>
              <li>Uslovi korišćenja</li>
              <li>Pomoć</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul>
              <li>Karijera</li>
              <li>Novosti</li>
              <li>Uslovi korišćenja</li>
              <li>Pomoć</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul>
              <li>Karijera</li>
              <li>Novosti</li>
              <li>Uslovi korišćenja</li>
              <li>Pomoć</li>
            </ul>
          </Col>
        </Row>
        <Divider />
        <Row type="flex" justify="center" align="middle">
          <Col span={1}>
            <LogoIcon />
          </Col>
          <Col span={23}>
            <b>© 2019 MultiCommerce.</b>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
