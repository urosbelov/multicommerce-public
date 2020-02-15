import React, { Component } from "react";
import { connect } from "react-redux";
import { CLOSE_REGISTER_MODAL, HANDLE_REGISTRATION } from "../../actions/types";
import {
  Modal,
  Typography,
  Form,
  Icon,
  Input,
  Button,
  DatePicker,
  Checkbox,
  Divider
} from "antd";
import locale from "antd/es/date-picker/locale/sr_RS";

const { Title } = Typography;

class RegisterModal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.register(values);
      }
    });
  };

  handleClose = () => {
    const { resetFields } = this.props.form;
    this.props.registerModalClose();
    resetFields();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [
        {
          type: "object",
          required: true,
          message: "Molimo Vas oznacite datum rodjenja!"
        }
      ]
    };
    return (
      <div style={{ zIndex: 1000 }}>
        <Modal
          centered
          forceRender={false}
          footer={null}
          visible={this.props.registerModal}
          onCancel={this.handleClose}
        >
          <div style={{ marginBottom: "2em" }}>
            <Title level={4}>Registrujte se</Title>
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
                })(<Input suffix={<Icon type="mail" />} placeholder="Email" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("firstname", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete ime!"
                    }
                  ]
                })(
                  <Input suffix={<Icon type="user" />} placeholder="Vase ime" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("lastname", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete prezime!"
                    }
                  ]
                })(
                  <Input
                    suffix={<Icon type="user" />}
                    placeholder="Vase prezime"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete lozinku!"
                    }
                  ]
                })(<Input.Password placeholder="Kreirajte lozinku" />)}
              </Form.Item>
              <div style={{ marginBottom: "5px" }}>
                <b>Datum rodjenja</b>
              </div>
              <div>
                <p>
                  Da biste se registrovali, potrebno je da imate 18. godina.
                  Drugim korisnicima nece biti prilozene Vase godine.
                </p>
              </div>
              <Form.Item>
                {getFieldDecorator(
                  "birthday",
                  config
                )(
                  <DatePicker
                    locale={locale}
                    renderExtraFooter={() => (
                      <p style={{ fontSize: 12, lineHeight: "1.5" }}>
                        Da biste promenili mesec kliknite na trenutni mesec.
                        <br />
                        Da biste promenili godinu kliknite na trenutnu godinu.
                      </p>
                    )}
                  />
                )}
              </Form.Item>
              <p>
                Slacemo Vam marketinske promocije, specijalne ponude i novosti
                oko nasih pravila i sistema putem email-a.
              </p>
              <Form.Item>
                <Button block size="large" type="primary" htmlType="submit">
                  <b>Registrujte se</b>
                </Button>
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("agreement", {
                  valuePropName: "checked",
                  initialValue: true
                })(
                  <Checkbox>Zelim da primam obavestenja Vaseg sajta.</Checkbox>
                )}
              </Form.Item>
            </Form>
            <Divider />
            <b>
              Vec imate nalog?
              <span style={{ marginLeft: "5px" }}>Prijavite se</span>
            </b>
          </div>
        </Modal>
      </div>
    );
  }
}

const Register = Form.create({ name: "login" })(RegisterModal);

function mapDispatchToProps(dispatch) {
  return {
    registerModalClose: () => dispatch({ type: CLOSE_REGISTER_MODAL }),
    register: payload => dispatch({ type: HANDLE_REGISTRATION, payload })
  };
}

function mapStateToProps(state) {
  return {
    registerModal: state.registration.modal
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
