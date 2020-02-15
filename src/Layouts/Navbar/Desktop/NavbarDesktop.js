import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogoIcon from "../Mobile/LogoIcon";
import DesktopMenuPublic from "./DesktopMenuPublic/DesktopMenuPublic";
import DesktopMenuPrivate from "./DesktopMenuPrivate/DesktopMenuPrivate";

import "../style.css";

class NavbarDesktop extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-logo" to="/">
          <LogoIcon />
        </Link>
        <div className="navbar-menu">
          {this.props.isLogged ? <DesktopMenuPrivate /> : <DesktopMenuPublic />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged
  };
}

export default connect(mapStateToProps, null)(NavbarDesktop);
