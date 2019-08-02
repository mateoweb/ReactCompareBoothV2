import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "../App.css";
import StarRatings from "react-star-ratings";
import ShopDetails from "./ShopDetails";

class Shops extends Component {
  state = {};

  render() {
    return (
      <Container>
        <ListGroup>
          {this.props.shops.map((detail, index) => (
            <ListGroup.Item key="index">
              <Row>
                <Col>
                  <Image
                    alt=""
                    src={detail.imgURL}
                    width={150}
                    height={150}
                    rounded
                  />
                </Col>
                <Col>
                  <h3 className="shop_title">{detail.nom}</h3>
                  <StarRatings
                    rating={this.props.rating}
                    starRatedColor="#DAA520"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    starDimension="15px"
                    name="rating"
                    starSpacing="2px"
                  />
                  <p id="resume">{detail.resume}</p>
                </Col>
                <Col>
                  <Row>
                    {detail.startPrice === ""
                      ? "Sur devis"
                      : "A partir de " + detail.startPrice + " €"}
                  </Row>
                  <Row>
                    {/* Make route with id, with key= detail.id */}
                    <Link
                      to={{
                        pathname: "/shopDetail/" + detail.id,
                        state: {shops : this.props.shops}
                      }}
                    >
                      <Button
                        className="detailButton"
                        key={detail.id}
                        variant="primary"
                        onClick={this.props.filterClick}
                      >
                        Détails
                      </Button>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default Shops;
