import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class HeaderFilters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-light justify-content-between">
        <div inline>
          <Navbar.Brand>Comparator-Booth</Navbar.Brand>
          <p>Que recherchez vous? </p>
          </div>
          <Form inline>
            {["radio"].map(type => (
              <div className="list-group">
                <div className="list-group-item">
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="Particuliers"
                      type={type}
                      id={`custom-inline-${type}-1`}
                      name="selectedOption"
                      value="particuliers"
                      checked={this.props.selectedOption === "particuliers"}
                      onChange={this.props.handleChanges}
                    />
                    <Form.Check
                      custom
                      inline
                      label="Pros"
                      type={type}
                      id={`custom-inline-${type}-2`}
                      name="selectedOption"
                      value="pros"
                      checked={this.props.selectedOption === "pros"}
                      onChange={this.props.handleChanges}
                    />
                  </div>
                </div>
                <div className="list-group-item">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <span className="oi oi-map-marker" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Code postal"
                      aria-label="Code postal"
                      aria-describedby="basic-addon1"
                      type="text"
                      name="zip_code"
                      value={this.props.zip_code}
                      onChange={this.props.handleChanges}
                    />
                  </InputGroup>
                </div>
              </div>
            ))}
            <Button variant="success" onClick={this.props.filterClick}>
              Go !
            </Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default HeaderFilters;
