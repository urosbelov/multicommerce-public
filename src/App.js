import React, { Component } from "react";
import { connect } from "react-redux";
import { CHECK_SESSION } from "./actions/types";
import { Router, Switch } from "react-router-dom";
import BasicLayout from "./Layouts";
import history from "./utils/history";
//GUARDS
import privateGuard from "./auth/PrivateGuard";
import publicGuard from "./auth/PublicGuard";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Loading from "./components/Loading";

class App extends Component {
  componentDidMount() {
    this.props.checkSession();
  }
  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <Router history={history}>
          <Switch>
            <BasicLayout exact path="/" component={Homepage} />
            <BasicLayout path="/login" component={publicGuard(Login)} />
            <BasicLayout path="/register" component={publicGuard(Register)} />
            <BasicLayout path="/help" component={Help} />
            <BasicLayout path="/cart" component={privateGuard(Cart)} />
            <BasicLayout path="/profile" component={privateGuard(Profile)} />
            <BasicLayout path="/store/:id" component={Store} />
            <BasicLayout path="/product/:id" component={Product} />
            <BasicLayout
              exact
              path="/dashboard"
              component={privateGuard(Dashboard)}
            />
            <BasicLayout path="/account" component={privateGuard(Account)} />
            <BasicLayout path="/inbox" component={privateGuard(Messages)} />
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    isLoading: state.auth.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkSession: () => dispatch({ type: CHECK_SESSION })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
