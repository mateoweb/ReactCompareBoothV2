import React, { Component } from "react";
import config from "./config";

import * as firebase from "firebase";
import "react-dates/initialize";

import "./App.css";

import Header from "./components/Header";
import MoreFilters from "./components/MoreFilters";
import ShopPreview from "./components/ShopPreview"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleShopClick: false,
      selectedOption: "option1",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false,
      filteredResults: [],
      rating: 5,
      shops: []
    };
    //To resolve clone App error when we are initializing App

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  getUserData = () => {
    let ref = firebase.database().ref("shops");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState({
        shops: state
      });
    });
  };
  componentWillMount() {
    this.getUserData();
  }

  handleChanges = e => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };

  filterClick = e => {
    e.preventDefault();
    function multiFilter(array, filters) {
      const filterKeys = Object.keys(filters);
      // filters all elements passing the criteria
      return array.filter(item => {
        // dynamically validate all filter criteria
        return filterKeys.every(key => {
          // ignores an empty filter
          if (!filters[key].length) return true;
          return filters[key].includes(item[key]);
        });
      });
    }

    let shops = this.state.shops;

  

    if (
      this.state.bornePhoto === true &&
      this.state.cabinePhoto === true &&
      this.state.helioBooth === true
    ) {
      let filters = {
        cabinePhoto: ["OUI"],
        bornePhoto: ["OUI"],
        heliobooth: ["OUI"]
      };
      var filtered = multiFilter(shops, filters);

      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
       filters = {
         pros: ["OUI"]
       };

       filtered = multiFilter(filtered, filters);

       this.setState({
         filteredResults : filtered
       })
      }
      console.info("Filtered:");
      console.log(filtered);
    } else if (
      this.state.helioBooth === true &&
      this.state.cabinePhoto === true
    ) {
      let filters = {
        heliobooth: ["OUI"],
        cabinePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });
      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pros: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (
      this.state.bornePhoto === true &&
      this.state.cabinePhoto === true
    ) {
      let filters = {
        cabinePhoto: ["OUI"],
        bornePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pros: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (
      this.state.helioBooth === true &&
      this.state.bornePhoto === true
    ) {
      let filters = {
        heliobooth: ["OUI"],
        bornePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pros: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (this.state.bornePhoto === true) {
      let filters = {
        bornePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pros: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (this.state.cabinePhoto === true) {
      let filters = {
        cabinePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pros: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (this.state.helioBooth === true) {
      let filters = {
        heliobooth: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pros: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else {
      console.log("aucun résultat");
    }

    // *the value of each key is an array with the values to filter
    // *filter the shops array by choosen parameters
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Header
          handleChanges={this.handleChanges}
          filterClick={this.filterClick}
          filteredResults={this.state.filteredResults}
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <MoreFilters handleChanges={this.handleChanges} />
        <ShopPreview
        filteredResults={this.state.filteredResults}
        />
      </div>
    );
  }
}

export default App;
