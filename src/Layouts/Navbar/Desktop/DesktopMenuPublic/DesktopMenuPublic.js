import React, { Component } from "react";
import { connect } from "react-redux";
import {
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
  OPEN_HELP_DRAWER
} from "../../../../actions/types";
import { Menu } from "antd";
import LoginModal from "../../../../pages/Login/LoginModal";
import RegisterModal from "../../../../pages/Register/RegisterModal";
import "./style.css";
import HelpDrawer from "../../../../pages/Help/HelpDrawer";

class DesktopMenuPublic extends Component {
  render() {
    return (
      <div>
        <Menu
          className="navbar-menu_public"
          mode="horizontal"
          selectable={false}
        >
          <Menu.Item key="1">Dodajte prodavnicu</Menu.Item>
          <Menu.Item onClick={this.props.helpDrawerOpen} key="2">
            Pomoć
          </Menu.Item>
          <Menu.Item onClick={this.props.registerModalOpen} key="3">
            Registrujte se
          </Menu.Item>
          <Menu.Item onClick={this.props.loginModalOpen} key="4">
            Prijavite se
          </Menu.Item>
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

function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
    registerModal: state.registerModal,
    helpDrawer: state.helpDrawer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DesktopMenuPublic);
