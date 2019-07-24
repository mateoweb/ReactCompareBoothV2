import React, { Component } from 'react';
import config from './config'
import Firebase from "firebase"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personnages: [],
    }
 
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
   }
  }

  
  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };
  componentDidMount(){
    this.getUserData();
  }
  render() { 
    return ( <div>

            <h1>Hello</h1>
    </div>  );
  }
}
 
export default App;