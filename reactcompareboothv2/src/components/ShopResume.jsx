import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../App.css";

class ShopResume extends Component {
  state = {};
  render() {
    
    return (
      <React.Fragment>
 {(this.props.filteredResults === [""]) ? "Aucun Résultat" : 

    ( <CardColumns className="card_container">
      {this.props.filteredResults.map((detail, index) => {
        return (
          <Card className="card_item" key={index}>
            <Card.Img variant="top" src={detail.imgURL} id="card_img" />
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
          
        );
      })}
    </CardColumns>)}
    </React.Fragment>
    );
  }
}

export default ShopResume;
