import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { OPEN_LOGIN_MODAL, OPEN_REGISTER_MODAL } from "../../../actions/types";
import { Divider } from "antd";
import "../style.css";

class MenuPublic extends Component {
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
              <b>Preuzmite aplikaciju</b>
            </div>
          </li>
          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Pozovite prijatelja</b>
            </div>
          </li>

          <Divider className="navbar__mobile-drawer-body-list-divider" />

          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Dodajte radnju</b>
            </div>
          </li>
          <li>
            <div className="navbar__mobile-drawer-body-list">
              <b>Kako funkcionišemo?</b>
            </div>
          </li>

          <Divider className="navbar__mobile-drawer-body-list-divider" />

          <li>
            <Link to="/help">
              <div className="navbar__mobile-drawer-body-list">
                <b>Pomoć</b>
              </div>
            </Link>
            <div
              className="navbar__mobile-drawer-body-list"
              onClick={this.props.registerModalOpen}
            >
              <b>Registrujte se</b>
            </div>
            <div
              className="navbar__mobile-drawer-body-list"
              onClick={this.props.loginModalOpen}
            >
              <b>Prijavite se</b>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginModalOpen: () => dispatch({ type: OPEN_LOGIN_MODAL }),
    registerModalOpen: () => dispatch({ type: OPEN_REGISTER_MODAL })
  };
}

function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
    registerModal: state.registerModal
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPublic);
