import React, { Component } from 'react';
import config from './config'

import * as firebase from "firebase"

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
            />
          <MoreFilters
           handleChanges={this.handleChanges}/>
    </div>  );
  }
}
 
export default App;