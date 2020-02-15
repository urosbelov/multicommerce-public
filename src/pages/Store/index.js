import React, { Component } from "react";
import {
  Card,
  Row,
  Col,
  Avatar,
  Typography,
  Tabs,
  Button,
  Icon,
  Spin,
  Skeleton,
  Result
} from "antd";
import ProductSnippet from "../../components/ProductSnippet";
import { getStore } from "../../services/API";
import "./style.css";



const { Title } = Typography;
const { TabPane } = Tabs;

class Store extends Component {
  constructor() {
    super();
    this.state = {
      store: {},
      products: [],
      isLoading: true
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    getStore(params.id, (err, store) => {
      this.setState({
        store: store.store,
        products: store.products,
        isLoading: false
      });
    });
  }
  render() {
    const products = this.state.products.map(product => {
      return (
        <Spin key={product._id} wrapperClassName="store__tab-list" spinning={this.state.isLoading}>
          <ProductSnippet
            className="store__list-card"
            key={product._id}
            id={product._id}
            img="https://source.unsplash.com/random/200x300"
            title={product.name}
            seller={this.state.store.name}
            sellerId={this.state.store._id}
            price={product.price}
          />
        </Spin>
      );
    });
    return (
      <div>
        <Card bordered={false}>
          <Row type="flex" style={{ minHeight: 180 }}>
            <Skeleton
              active
              loading={this.state.isLoading}
              paragraph={{ rows: 5 }}
            >
              <Col xs={24} md={6}>
                <Avatar
                  src="https://source.unsplash.com/random/1200x900"
                  shape="square"
                  size={180}
                />
              </Col>

              <Col
                xs={24}
                md={9}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}
              >
                <Row>
                  <Title level={4}>{this.state.store.name}</Title>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Row>

                <Row type="flex" justify="space-between">
                  <div>
                    <Button icon="read">Preuzmite katalog</Button>
                    <Button icon="shop">Lokacija</Button>
                  </div>
                  <div>
                    <Button shape="circle">
                      <Icon type="more" rotate={90} />
                    </Button>
                  </div>
                </Row>
              </Col>

              <Col xs={24} md={9}>
                <b>
                  Da li ovde staviti Google Mape ili ih aktivirati na klik
                  pitanje je sad....
                </b>
              </Col>
            </Skeleton>
          </Row>
        </Card>

        <Tabs
          tabBarStyle={{
            backgroundColor: "#ffffff"
          }}
          size="large"
          defaultActiveKey="1"
        >
          <TabPane className="store__tab-list-products" tab={<b>Proizvodi</b>} key="1">
            {products}
          </TabPane>
          <TabPane tab={<b>Ocene</b>} key="2">
            <Result title="Ocene" subTitle="To do..." />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Store;
