import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Row,
  Col,
  Spin,
  Carousel,
  Typography,
  Button,
  InputNumber,
  Divider,
  Breadcrumb,
  Skeleton,
  Alert,
  message
} from "antd";
import Lightbox from "fslightbox-react";
import "./style.css";
import { getProduct } from "../../services/API";
import { ADD_TO_CART } from "../../actions/types";

const { Title } = Typography;

class Product extends Component {
  componentDidMount() {
    getProduct(this.props.match.params.id, (err, product) => {
      console.log("Product: ", product);
      const breadcrumbs = product.category;
      let newBreadcrumbs = [];
      breadcrumbs.forEach(breadcrumb => {
        newBreadcrumbs.push(this.Capitalize(breadcrumb));
      });

      this.setState({
        product: product,
        category: newBreadcrumbs,
        owner: product.owner,
        isLoading: false
      });
    });
  }
  constructor(props) {
    super(props);
    this.lightbox = this.lightbox.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      product: {},
      category: [],
      owner: {},
      quantity: 1,
      isLoading: true,
      toggler: false
    };
  }

  addToCart() {
    const product = {
      _id: this.state.product._id,
      name: this.state.product.name,
      price: this.state.product.price,
      owner: this.state.owner
    };
    const quantity = this.state.quantity;
    this.props.addToCart({ ...product, quantity });
  }

  handleAddToCart() {
    if (this.props.isLogged) {
      this.addToCart();
    } else {
      message.info("Molimo Vas da se prijavite!");
    }
  }

  lightbox() {
    this.setState({
      toggler: !this.state.toggler
    });
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const breadcrumb = this.state.category.map((category, index) => {
      return (
        <Breadcrumb.Item key={index} href="">
          {category}
        </Breadcrumb.Item>
      );
    });
    return (
      <div>
        <Card
          title={
            <Skeleton
              active
              loading={this.state.isLoading}
              paragraph={{ rows: 0 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline"
                }}
              >
                <Breadcrumb separator=">">
                  <Breadcrumb.Item href="">Pocetna strana</Breadcrumb.Item>
                  {breadcrumb}
                </Breadcrumb>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Title style={{ marginBottom: 0 }} level={4}>
                    {this.state.product.name}
                  </Title>
                  <p style={{ fontSize: 12, alignSelf: "flex-end", margin: 0 }}>
                    {this.state.owner.name}
                  </p>
                </div>
              </div>
            </Skeleton>
          }
          actions={[
            <Button type="danger" onClick={this.handleAddToCart}>
              <b>Dodajte u korpu</b>
            </Button>
          ]}
        >
          <Row gutter={40}>
            <Col span={12}>
              <Spin spinning={this.state.isLoading}>
                <div>
                  <div onClick={this.lightbox}>
                    <Carousel
                      autoplay
                      autoplaySpeed={2000}
                      draggable={true}
                      dots={false}
                    >
                      <img src="https://picsum.photos/1920/1080" alt="" />
                      <img
                        src="https://picsum.photos/1920/1080?grayscale"
                        alt=""
                      />
                      <img src="https://picsum.photos/1920/1080/?blur" alt="" />
                    </Carousel>
                  </div>
                  <Lightbox
                    toggler={this.state.toggler}
                    sources={[
                      "https://picsum.photos/1920/1080",
                      "https://picsum.photos/1920/1080?grayscale",
                      "https://picsum.photos/1920/1080/?blur"
                    ]}
                  ></Lightbox>
                </div>
              </Spin>

              <Alert
                style={{ border: 0 }}
                message="Da biste uvećali fotografije kliknite na njih."
              />
            </Col>
            <Col span={12}>
              <Skeleton
                active
                loading={this.state.isLoading}
                paragraph={{ rows: 8 }}
              >
                <Row type="flex" justify="space-between">
                  <div style={{ width: "100%" }}>
                    <p>{this.state.product.description}</p>

                    <Divider />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      width: "100%"
                    }}
                  >
                    <div>
                      <b>Cena</b>
                      <Divider type="vertical" />
                      <b>{this.state.product.price} RSD</b>
                    </div>
                    <div>
                      <b>Kolicina</b>
                      <Divider type="vertical" />
                      <InputNumber
                        onChange={value => {
                          this.setState({ quantity: value });
                        }}
                        size="large"
                        min={1}
                        max={10}
                        defaultValue={1}
                      />
                    </div>
                  </div>
                </Row>
              </Skeleton>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch({ type: ADD_TO_CART, product })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
