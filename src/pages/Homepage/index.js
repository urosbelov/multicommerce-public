import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GET_STORES } from "../../actions/types";
import { Carousel, Card, Typography } from "antd";
import { getStores } from "../../services/API";
import "./style.css";

const { Meta } = Card;
const { Title } = Typography;

class Homepage extends Component {
  componentDidMount() {
    getStores((err, stores) => {
      this.props.getStores(stores);
    });
  }

  render() {
    const stores = Array.from(this.props.stores);
    const storeList = stores.map(stores => {
      return (
        <Card
          key={stores._id}
          className="home__list-card"
          hoverable
          cover={
            <img
              alt="example"
              src="https://source.unsplash.com/random/1200x900"
            />
          }
        >
          <Link key={stores._id} to={`/store/${stores._id}`}>
            <Meta title={<b>{stores.name}</b>} />
          </Link>
        </Card>
      );
    });

    return (
      <div>
        <Title level={4}>DEVELOPMENT</Title>
        <div>
          <Carousel className="home__carousel" autoplay autoplaySpeed={2500}>
            <img src="https://source.unsplash.com/random/1200x300" alt="" />
            <img src="https://source.unsplash.com/random/1200x300" alt="" />
            <img src="https://source.unsplash.com/random/1200x300" alt="" />
          </Carousel>
          <Title level={4}>Stores List:</Title>
        </div>

        <div className="home__list">
          {this.props.stores.length < 0 ? (
            <h4>There are no stores at the moment.</h4>
          ) : (
            storeList
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStores: stores => dispatch({ type: GET_STORES, stores })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
