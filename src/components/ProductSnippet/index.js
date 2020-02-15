import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Tag, Button } from "antd";
import "./ProductSnippet.css";

class ProductSnippet extends Component {
  render() {
    return (
      <div className="snippet">
        <div className="snippet-img">
          <img src={this.props.img} width={350} height={250} alt="" />
        </div>

        <Row className="snippet-info" type="flex" justify="space-between">
          <Col>
            <b>{this.props.title}</b>
            <Link to={`/store/${this.props.sellerId}`}>
              <p className="snippet-info_p">{this.props.seller}</p>
            </Link>
          </Col>
          <Col>
            <Tag color="blue">
              <b>{this.props.price} RSD</b>
            </Tag>
            <Link to={`/product/${this.props.id}`}>
              <Button type="danger">
                <b>Kupite</b>
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductSnippet;
