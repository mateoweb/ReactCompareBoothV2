import React, { Component } from 'react';

import * as firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = { 
      loading: true
     }

     firebase.initializeApp(firebaseConfig)  
    }

     componentWillMount (){
       const shops = firebase.database().ref('shops')
      
      shops.on('value', snapshot => {
        this.setState({
          shops: snapshot.val(),
          loading: false
        })
      })

     }

  render() { 
    return (  
      <div>

      </div>
    );
  }
}
 
export default App ;
