import React, { Component } from "react";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

import "../App.css";

class ShopResume extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ListGroup>
          {this.props.filteredResults.map((detail, index) => (
            <ListGroup.Item key={index}>
              <Row>
                <Col xs={4} md={4} lg={4}>
                  <Image
                    alt=""
                    src={detail.imgURL}
                    width={150}
                    height={150}
                    rounded
                  />
                </Col>
                <Col xs={6} md={6} lg={6}>
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
                <Col xs={2} md={2} lg={2}>
                <Row>
                  {detail.startPrice === ""
                    ? "Sur devis"
                    : "A partir de " + detail.startPrice + " €"}</Row>
                  <Row><Link to="/shopDetail">
                    <Button
                      className="detailButton"
                      id={index}
                      variant="primary"
                      onClick={this.props.filterClick}
                    >
                      Détails
                    </Button>
                  </Link></Row>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default ShopResume;
