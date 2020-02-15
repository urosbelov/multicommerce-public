import React, { Component } from "react";
import { connect } from "react-redux";
import { CLOSE_HELP_DRAWER } from "../../../actions/types";
import { Drawer, PageHeader, Button, Layout, Typography, Divider } from "antd";
import history from "../../../utils/history";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class HelpDrawer extends Component {
  redirectToHelpPage = () => {
    this.props.helpDrawerClose();
    history.push("/help");
  };
  render() {
    return (
      <Drawer
        width="400px"
        placement="right"
        bodyStyle={{ padding: 0 }}
        onClose={this.props.helpDrawerClose}
        visible={this.props.helpDrawer}
      >
        <Layout style={{ display: "flex", height: "100vh" }}>
          <Header
            style={{
              display: "flex",
              justifyContent: "center",

              flex: "0 0 auto",
              paddingTop: 24,
              paddingLeft: 24,
              paddingRight: 24,
              paddingBottom: 12,
              height: "auto"
            }}
          >
            <PageHeader
              style={{ padding: 0 }}
              title={<Title level={4}>Preporučena pomoć</Title>}
            />
          </Header>
          <Divider style={{ margin: 0 }} />
          <Content
            style={{
              padding: 24,
              flex: "1 1 auto",
              position: "relative",
              overflowY: "auto"
            }}
          >
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
            <h1>POMOC</h1>
          </Content>
          <Divider style={{ margin: 0 }} />
          <Footer
            style={{
              display: "flex",
              justifyContent: "center",
              flex: "0 0 auto",
              padding: 24
            }}
          >
            <Button
              onClick={this.redirectToHelpPage}
              block
              size="large"
              type="primary"
            >
              <b>Centar za pomoć</b>
            </Button>
          </Footer>
        </Layout>
      </Drawer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    helpDrawerClose: () => dispatch({ type: CLOSE_HELP_DRAWER })
  };
}

function mapStateToProps(state) {
  return {
    helpDrawer: state.helpDrawer
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpDrawer);
