import React, { Component } from 'react'

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class MoreFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                {["checkbox"].map(type => (
              <div className="list-group">
              <div className="list-group-item">
              <div key={`custom-inline-${type}`} className="mb-3">
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
              </div>
            </div>
            
            ))}
            </React.Fragment>
         );
    }
}
 
export default MoreFilters;