import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { Link } from 'react-router-dom'

moment.locale("fr");

class HeaderFilters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar id="navbar" className="bg-light">
          <Link to='/'><Navbar.Brand href="#home">Comparator-Booth</Navbar.Brand></Link>
          <Form inline action="https://docs.google.com/forms/d/e/1FAIpQLSdFMU1qNo4vc04bZc9u90SYrPgEdqVzQ9VGvQ1U3fZ6mshNRA/formResponse" target="_self" method="POST" id="mG61Hd" >
            {["radio"].map(type => (
              <React.Fragment key={`custom-inline-${type}`}>
                <Form.Check
                  custom
                  inline
                  label="Particuliers"
                  type={type}
                  id={`custom-inline-${type}-1`}
                  jsname="wCJL8"
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
              </React.Fragment>
            ))}
          </Form>
          &nbsp;
          <Form inline>
            <FormControl
              placeholder="Code postal"
              aria-label="Code postal"
              aria-describedby="basic-addon1"
              type="text"
              name="zip_code"
              value={this.props.zip_code}
              onChange={this.props.handleChanges}
            />
            &nbsp;
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
            &nbsp;
            <Button type="submit"variant="success" onClick={this.props.filterClick}><Link to = "/search" >Recherche !</Link></Button> &nbsp;
            
            <Button variant="primary" onClick={this.props.moreFilterClick}>
              Plus de filtres !
            </Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default HeaderFilters;
