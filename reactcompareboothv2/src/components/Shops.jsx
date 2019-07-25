import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "../App.css"

class Shops extends Component {
  state = {};
  render() {
    return (
      <CardGroup className="card_container">
        {this.props.shops.map((detail, index) => {
          return (
            <Card className="card_item" key = {index}>
              <Card.Img
                variant="top"
                src={detail.imgURL}
                id="card_img"
              />
              <Card.Body>
                <Card.Title className="shopTitle">{detail.nom}</Card.Title>
                <Card.Text>{detail.resume}</Card.Text>
                <Button variant="primary" onClick={this.props.filterClick}>
                  Détails
                </Button>
              </Card.Body>             
            </Card>
          );
        })}
      </CardGroup>
    );
  }
}

export default Shops;
