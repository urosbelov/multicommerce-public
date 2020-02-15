import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import { Layout } from "antd";

import "./style.css";

const { Header, Content, Footer } = Layout;

class BasicLayout extends Component {
  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout className="layout">
            <Header className="header">
              <Navbar />
            </Header>
            <Content className="content">
              <Component {...matchProps} />
            </Content>

            {this.props.isMobile ? null : (
              <Footer className="footer">
                <FooterPage />
              </Footer>
            )}
          </Layout>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.isMobile.lessThan.large
  };
}

export default connect(mapStateToProps, null)(BasicLayout);
