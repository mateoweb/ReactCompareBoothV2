import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

moment.locale("fr");

class HeaderFilters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-light justify-content-between">
          <div inline="true">
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
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              displayFormat={() => moment.localeData("fr").longDateFormat("L")}
            />
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
