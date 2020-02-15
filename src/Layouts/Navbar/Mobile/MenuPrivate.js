import React, { Component } from "react";
import { Divider, Icon } from "antd";

class MenuPrivate extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navbar__mobile-drawer-body">
          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Početna strana</b>
            </div>
          </li>

          <Divider className="navbar__mobile-drawer-body-list-divider" />

          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Profil</b>
              <Icon style={{ fontSize: 20 }} type="user" />
            </div>
          </li>
          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Podešavanje naloga</b>
              <Icon style={{ fontSize: 20 }} type="setting" />
            </div>
          </li>

          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Poruke</b>
              <Icon style={{ fontSize: 20 }} type="message" />
            </div>
          </li>
          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Pozovite prijatelja</b>
              <Icon style={{ fontSize: 20 }} type="gift" />
            </div>
          </li>
          <Divider className="navbar__mobile-drawer-body-list-divider" />
          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Preuzmite aplikaciju</b>
            </div>
          </li>
          <Divider className="navbar__mobile-drawer-body-list-divider" />

          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Pomoć</b>
            </div>
            <div
              className="navbar__mobile-drawer-body-list"
              onClick={this.props.loginModalOpen}
            >
              <b>Odjavite se</b>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MenuPrivate;
