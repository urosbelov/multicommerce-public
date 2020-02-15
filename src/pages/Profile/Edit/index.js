import React, { Component } from "react";
import { Descriptions, Form, Input, DatePicker, Button } from "antd";
import locale from "antd/es/date-picker/locale/sr_RS";

class ProfileEdit extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Izmenite profil">
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="loginForm"
              hideRequiredMark={true}
            >
              <Form.Item label="Vaše ime">
                {getFieldDecorator("firstname", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete ime!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Vase prezime">
                {getFieldDecorator("lastname", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete prezime!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>

              <Form.Item label="Email">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete email adresu!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>

              <Form.Item label="Datum rodjenja">
                {getFieldDecorator("birthday", config)(
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

              <Form.Item></Form.Item>
            </Form>
          </Descriptions.Item>
        </Descriptions>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            <b>Sačuvajte</b>
          </Button>
        </div>
      </div>
    );
  }
}

const ProfileEditForm = Form.create({ name: "login" })(ProfileEdit);

export default ProfileEditForm;
