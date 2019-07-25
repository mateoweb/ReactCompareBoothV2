import React, { Component } from 'react';
import config from './config'

import * as firebase from "firebase"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() { 
    return ( <div>

            <h1>Hello</h1>
    </div>  );
  }
}
 
export default App;