import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../App.css";

class Shops extends Component {
  state = {};
  render() {
    return (
     
<React.Fragment>
<Container>
  <Row>
    {this.props.shops.map((detail, index) =>(
      <Col xs={6} md={3} key={index}>
        <Card >
    <Card.Img variant="top" src={detail.imgURL} id="card_img"/>
    <Card.Body>
      <Card.Title className="shopTitle">{detail.nom}</Card.Title>
      <Card.Text>{detail.resume}</Card.Text>
      <Button variant="primary" onClick={this.props.filterClick}>Détails</Button>
    
   
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          {detail.startPrice === "" ? "Sur devis" : 'A partir de ' + detail.startPrice + ' €'}
        </ListGroupItem>

      </ListGroup>
    </Card.Body>
  </Card>
      </Col>
    ))}
    
    
  </Row>
</Container>
</React.Fragment>
    );
  }
}

export default Shops;
