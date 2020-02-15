import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Row,
  Col,
  Collapse,
  List,
  Avatar,
  Button,
  InputNumber,
  Popconfirm,
  Empty,
  Icon,
  message,
  notification
} from "antd";
import { REMOVE_FROM_CART, CANCEL_CART } from "../../actions/types";
import NumberFormat from "react-number-format";
import { createOrder } from "../../services/API.js";

const { Panel } = Collapse;

class Cart extends Component {
  handleOrder = () => {
    if (this.props.products.length > 0) {
      createOrder({ orders: this.props.products });
      notification.open({
        message: "Porudzbina je poslata!",
        description:
          "Vasa porudzbina je poslata i uskoro cete primiti povratne informacije."
      });
      this.props.cancelCart();
    } else {
      message.info("Korpa je trenutno prazna.");
    }
  };
  render() {
    let numbers = [];
    this.props.products.map(store => {
      return store.products.map(product => {
        return (
          numbers.push(product.price * product.quantity), console.log(numbers)
        );
      });
    });
    let sum = numbers.reduce((a, b) => a + b, 0);

    ///OPEN COLLAPSE PANELS (DEFAULT ACTIVE KEYS)
    let stores = [];
    this.props.products.map(store => {
      return stores.push(store.store._id);
    });

    ///MAP PRODUCTS FROM REDUX STATE
    const products = this.props.products.map(product => {
      return (
        <Panel key={product.store._id} header={<b>{product.store.name}</b>}>
          <List
            itemLayout="horizontal"
            dataSource={product.products}
            renderItem={item => (
              <List.Item
                key={item._id}
                actions={[
                  <Popconfirm
                    title="Da li ste sigurni da zelite da izbacite proizvod iz korpe?"
                    okText="Da"
                    cancelText="Ne"
                    onConfirm={() => {
                      this.props.removeFromCart(item._id, product.store._id);
                    }}
                  >
                    <Button size="small" icon="minus" />
                  </Popconfirm>
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      size="large"
                      src="https://picsum.photos/200"
                    />
                  }
                  title={`${item.name}`}
                />
                <Row style={{ width: "60%" }} type="flex" justify="end">
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row"
                    }}
                    span={8}
                  >
                    <InputNumber defaultValue={item.quantity} size="small" />
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row"
                    }}
                    span={8}
                  >
                    <b>
                      <NumberFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix=" RSD"
                      />
                    </b>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Panel>
      );
    });
    return (
      <div>
        <Row gutter={16}>
          <Col md={16} xs={24}>
            <Card bodyStyle={{ padding: 0 }} title={<b>Vaša korpa</b>}>
              {this.props.products.length ? (
                <div>
                  <Collapse
                    bordered={false}
                    expandIconPosition="right"
                    defaultActiveKey={stores}
                  >
                    {products}
                  </Collapse>
                  <div
                    style={{
                      padding: "16px 24px 16px",
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <b style={{ marginRight: 16 }}>Ukupno:</b>
                    <b style={{ fontSize: 16 }}>
                      <NumberFormat
                        value={sum}
                        displayType={"text"}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix=" RSD"
                      />
                    </b>
                  </div>
                </div>
              ) : (
                <Empty
                  description="Korpa je prazna..."
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              )}
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card
              title={<b>Za uplatu</b>}
              actions={[
                <Button onClick={this.handleOrder} type="primary">
                  Porucite
                </Button>
              ]}
            >
              <h4>Ukupno za uplatu: {sum}</h4>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (productId, storeId) =>
      dispatch({ type: REMOVE_FROM_CART, productId, storeId }),
    cancelCart: () => dispatch({ type: CANCEL_CART })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
