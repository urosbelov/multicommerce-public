import React, { Component } from "react";
import { connect } from "react-redux";
import { CLOSE_LOGIN_MODAL, HANDLE_AUTHENTICATION } from "../../actions/types";
import { Modal, Typography, Form, Icon, Input, Button, Divider } from "antd";

const { Title } = Typography;

class LoginModal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  };

  handleClose = () => {
    const { resetFields } = this.props.form;
    this.props.loginModalClose();
    resetFields();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ zIndex: 1000 }}>
        <Modal
          centered
          forceRender={false}
          footer={null}
          visible={this.props.loginModal}
          onCancel={this.handleClose}
        >
          <div style={{ marginBottom: "2em" }}>
            <Title level={4}>Prijavite se da biste nastavili</Title>
          </div>
          <div>
            <Form onSubmit={this.handleSubmit} className="loginForm">
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete email adresu!"
                    }
                  ]
                })(<Input suffix={<Icon type="user" />} placeholder="Email" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete lozinku!"
                    }
                  ]
                })(<Input.Password placeholder="Lozinka" />)}
              </Form.Item>
              <Form.Item>
                <Button block size="large" type="primary" htmlType="submit">
                  <b>Prijavite se</b>
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <b>Zaboravili ste lozinku?</b>
          </div>
          <Divider />
          <b>
            Nemate nalog?
            <span style={{ marginLeft: "5px" }}>Registrujte se</span>
          </b>
        </Modal>
      </div>
    );
  }
}

const Login = Form.create({ name: "login" })(LoginModal);

function mapDispatchToProps(dispatch) {
  return {
    loginModalClose: () => dispatch({ type: CLOSE_LOGIN_MODAL }),
    login: userData => dispatch({ type: HANDLE_AUTHENTICATION, userData })
  };
}

function mapStateToProps(state) {
  return {
    loginModal: state.auth.modal
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
