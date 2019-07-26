import React, { Component } from "react";

class ShopDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">Logo</div>
          <div className="col-8">
              <h2>Titre</h2>
              <p>Notation</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <h3>Titre2</h3>
              <p>Website</p>
          </div>
          <div className="col">
              <h2>Services</h2>
              <p>Rappel des services</p>
          </div>
        </div>
        <div className="row">
        <div className="col">
              <h2>Présentation</h2>
              <p>Résume</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
