import React, { Component } from 'react';
import config from './config'

import * as firebase from "firebase"
import 'react-dates/initialize';

import './App.css';

import Header from './components/Header'
import MoreFilters from './components/MoreFilters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleShopClick: false,
      selectedOption: "option1",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false,
      filteredResults: [""],
      rating: 5,
      shops: [],
    }
     //To resolve clone App error when we are initializing App

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
   }
  }

  getUserData = () => {
    let ref = firebase.database().ref("shops");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(
        {
          shops: state
        });
    });
  };
  componentWillMount(){
    this.getUserData();
  }

  handleChanges = e => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };


  render() { 
    return ( <div>

            <h1>Hello</h1>
            <Header
            handleChanges={this.handleChanges}
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          <MoreFilters
           handleChanges={this.handleChanges}/>
    </div>  );
  }
}
 
export default App;