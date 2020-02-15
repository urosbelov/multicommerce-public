import React, { Component } from "react";
import { Typography, Form, Icon, Input, Button, Divider } from "antd";

const { Title } = Typography;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: 384, padding: "32px", border: "1px solid #e8e8e8" }}
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
        </div>
      </div>
    );
  }
}

const LoginPage = Form.create({ name: "login" })(Login);

export default LoginPage;
