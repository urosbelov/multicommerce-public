import React, { Component } from "react";
import { connect } from "react-redux";
import {
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
  OPEN_HELP_DRAWER
} from "../../../../actions/types";
import { Menu, Icon } from "antd";
import LoginModal from "../../../../pages/Login/LoginModal";
import RegisterModal from "../../../../pages/Register/RegisterModal";
import "./style.css";
import HelpDrawer from "../../../../pages/Help/HelpDrawer";
import history from "../../../../utils/history";

const { SubMenu } = Menu;

class DesktopMenuPrivate extends Component {
  redirectToProfile() {
    history.push("/profile/edit");
  }
  redirectToAccount() {
    history.push("/account/notifications");
  }
  redirectToMessages() {
    history.push("/inbox");
  }
  redirectToCart() {
    history.push("/cart");
  }
  render() {
    return (
      <div>
        <Menu
          className="navbar-menu__private"
          mode="horizontal"
          selectable={false}
        >
          <Menu.Item key="1">Dodajte prodavnicu</Menu.Item>
          <Menu.Item key="2" onClick={this.props.helpDrawerOpen}>
            Pomoć
          </Menu.Item>
          <Menu.Item key="3" onClick={this.redirectToMessages}>
            Poruke
          </Menu.Item>
          <Menu.Item key="4" onClick={this.redirectToCart}>
            Korpa
          </Menu.Item>
          <SubMenu
            title={
              <Icon
                style={{
                  margin: 0,
                  padding: 10,
                  fontSize: 16,
                  backgroundColor: "#e8e8e8",
                  borderRadius: 50
                }}
                type="user"
              />
            }
          >
            <Menu.Item onClick={this.redirectToProfile} key="setting:1">
              <b>Profil</b>
            </Menu.Item>
            <Menu.Item onClick={this.redirectToAccount} key="setting:2">
              <b>Nalog</b>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="setting:3">
              <b>Pozovite prijatelje</b>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <b>Odjavite se</b>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <RegisterModal />
        <LoginModal />
        <HelpDrawer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginModalOpen: () => dispatch({ type: OPEN_LOGIN_MODAL }),
    registerModalOpen: () => dispatch({ type: OPEN_REGISTER_MODAL }),
    helpDrawerOpen: () => dispatch({ type: OPEN_HELP_DRAWER })
  };
}

export default connect(null, mapDispatchToProps)(DesktopMenuPrivate);
