import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

class Shops extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.shops.map((detail, index) => {
          return (
            <React.Fragment key={index}>
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src= {detail.imgURL}
                />
                <Card.Body>
                  <Card.Title>{detail.nom}</Card.Title>
                  <Card.Text>{detail.resume}</Card.Text>
                  <Button variant="primary" onClick={this.props.filterClick}>Détails</Button>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    A partir de: {detail.startPrice} €
                  </ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">{detail.website}</Card.Link>
                </Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Shops;
