import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CLOSE_MOBILE_DRAWER,
  OPEN_MOBILE_DRAWER,
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL
} from "../../../actions/types";
import { Drawer, Icon } from "antd";
import LogoIcon from "./LogoIcon";
import MenuPublic from "./MenuPublic";
import MenuPrivate from "./MenuPrivate";
import LoginModal from "../../../pages/Login/LoginModal";
import RegisterModal from "../../../pages/Register/RegisterModal";
import "../style.css";

class NavbarMobile extends Component {
  // LOGO ROTATION
  rotateIn = {
    transition: "transform .3s ease-in-out",
    transform: "rotate(180deg)"
  };

  rotateOut = {
    transition: "transform .3s ease-in-out",
    transform: "rotate(0deg)"
  };

  handleDrawer = () => {
    if (!this.props.mobileDrawer) {
      this.props.mobileDrawerOpen();
    } else {
      this.props.mobileDrawerClose();
    }
  };

  render() {
    let Menu;
    if (this.props.isLogged) {
      Menu = <MenuPrivate />;
    } else {
      Menu = <MenuPublic />;
    }
    return (
      <div className="navbar__mobile-wrapper">
        <div className="navbar__mobile">
          <div onClick={this.handleDrawer} className="navbar-logo">
            <LogoIcon />
            <Icon
              style={this.props.mobileDrawer ? this.rotateIn : this.rotateOut}
              type="down"
            />
          </div>
        </div>

        <Drawer
          bodyStyle={{ marginTop: this.props.mobileDrawer ? "65px" : "0px" }}
          zIndex={1}
          mask={false}
          height="100vh"
          placement="top"
          closable={false}
          onClose={this.props.mobileDrawerClose}
          visible={this.props.mobileDrawer}
        >
          {Menu}
        </Drawer>
        <LoginModal />
        <RegisterModal />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mobileDrawerClose: () => dispatch({ type: CLOSE_MOBILE_DRAWER }),
    mobileDrawerOpen: () => dispatch({ type: OPEN_MOBILE_DRAWER }),
    loginModalOpen: () => dispatch({ type: OPEN_LOGIN_MODAL }),
    registerModalOpen: () => dispatch({ type: OPEN_REGISTER_MODAL })
  };
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    mobileDrawer: state.mobileDrawer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile);
