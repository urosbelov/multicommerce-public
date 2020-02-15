import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarDesktop from "./Desktop/NavbarDesktop";
import NavbarMobile from "./Mobile/NavbarMobile";

class index extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.isMobile.lessThan.large
  };
}

export default connect(
  mapStateToProps,
  null
)(index);
