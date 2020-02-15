import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../utils/history";

export default OriginalComponent => {
  class ProtectedRoute extends Component {
    checkAuth() {
      if (!this.props.isLogged) {
        history.push("/");
      }
    }
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      isLogged: state.auth.isLogged,
      isLoading: state.auth.isLoading
    };
  }

  return connect(mapStateToProps, null)(ProtectedRoute);
};
