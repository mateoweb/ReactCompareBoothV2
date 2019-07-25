import React, { Component } from "react";

import Form from "react-bootstrap/Form";

class MoreFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {["checkbox"].map(type => (
          <div className="list-group">
            <div className="list-group-item">
              <div key={`custom-inline-${type}`} className="mb-3">
              <Form.Label>Type de matériel: &nbsp;</Form.Label>
                <Form.Check
                  custom
                  inline
                  label="Cabine Photo"
                  type={type}
                  id={`custom-inline-${type}-1`}
                  name={"cabinePhoto"}
                  value={this.props.cabinePhoto}
                  onChange={this.props.handleChanges}
                />
                <Form.Check
                  custom
                  inline
                  label="Borne Photo"
                  type={type}
                  id={`custom-inline-${type}-2`}
                  name="bornePhoto"
                  value={this.props.bornePhoto}
                  onChange={this.props.handleChanges}
                />
                <Form.Check
                  custom
                  inline
                  label="Helio Booth"
                  type={type}
                  id={`custom-inline-${type}-3`}
                  name="helioBooth"
                  value={this.props.helioBooth}
                  onChange={this.props.handleChanges}
                />

                
              </div>
              
        <Form.Group inline controlId="exampleForm.ControlSelect1">
          <Form.Label>Type d'événement:</Form.Label>
          <Form.Control style={{ width: "300px" }} as="select">
            <option>Mariage</option>
            <option>Anniversaire</option>
            <option>EVJF/EVJG</option>
            <option>Soirée d'entreprise</option>
            <option>Salon</option>
            <option>Longue durée</option>
            <option>Autres</option>
          </Form.Control>
        </Form.Group>
            </div>

            
          </div>
        ))}

      </React.Fragment>
    );
  }
}

export default MoreFilters;
