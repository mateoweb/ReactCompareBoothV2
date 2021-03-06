import React, { Component } from "react";
import config from "./config";
import * as firebase from "firebase";
import "react-dates/initialize";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";

import HeaderFilters from "./components/HeaderFilters";
import MoreFilters from "./components/MoreFilters";
import ShopPreview from "./components/ShopPreview";
import ShopSearch from "./components/ShopSearch";
import ShopDetails from "./components/ShopDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetLoaded: false,
      isNotClicked: true,
      isMoreFiltersNotRequired: true,
      handleShopClick: false,
      selectedOption: "option1",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false,
      filteredResults: [],
      filteredResultsLength: 0,
      rating: 5,
      shops: [],
      loading: true,
      zip_code: ""
    };
    //To resolve clone App error when we are initializing App

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  checkLoading = () => {
    if (this.state.loading === true) {
      console.log("loading...");
    } else if (this.state.loading === false) {
      console.log("Finish load");
    }
  };

  getUserData = () => {
    let ref = firebase.database().ref("shops");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState({
        shops: state,
        loading: false
      });
    });
  };

  componentWillMount() {
    this.checkLoading();
    this.getUserData();
  }

  handleChanges = e => {
    const input = e.currentTarget;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };

  moreFilterClick = e => {
    e.preventDefault();

    this.setState({
      ...this.state,
      isMoreFiltersNotRequired: !this.state.isMoreFiltersNotRequired,

      //If its Search Click is cliked
      isMoreFiltersRequired: !this.state.isMoreFiltersRequired,
      filteredResultsLength: this.state.filteredResults.length
    });
  };

  filterClick = e => {
    e.preventDefault();

    this.setState({
      ...this.state,
      isNotClicked: false,

      //If its Search Click is cliked
      isClicked: true,
      filteredResultsLength: this.state.filteredResults.length
    });
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
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
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
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
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
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
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
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
    } else if (this.state.bornePhoto === true) {
      let filters = {
        bornePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
    } else if (this.state.cabinePhoto === true) {
      let filters = {
        cabinePhoto: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
    } else if (this.state.helioBooth === true) {
      let filters = {
        heliobooth: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if (this.state.selectedOption === "pros") {
        filters = {
          pros: ["OUI"]
        };

        filtered = multiFilter(filtered, filters);

        this.setState({
          filteredResults: filtered
        });
      }
    } else {
      console.log("aucun résultat");
    }

    // *the value of each key is an array with the values to filter
    // *filter the shops array by choosen parameters
  };

  render() {
    return (
      <Router>
          <HeaderFilters
            wrapperHeaderFunction={this.wrapperHeaderFunction}
            zip_code={this.state.zip_code}
            handleChanges={this.handleChanges}
            isClicked={this.isClicked}
            filterClick={this.filterClick}
            selectedOption={this.state.selectedOption}
            moreFilterClick={this.moreFilterClick}
            filteredResults={this.state.filteredResults}
            rating={this.state.rating}
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

          {this.state.isMoreFiltersRequired ? (
            <MoreFilters
              handleChanges={this.handleChanges}
              isClicked={this.isClicked}
              filterClick={this.filterClick}
              moreFilterClick={this.moreFilterClick}
              filteredResults={this.state.filteredResults}
              rating={this.state.rating}
            />
          ) : null}
          <div>
            {this.state.login ? <Spinner animation="border" size="xl" /> : null}
          </div>


          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ShopPreview
                  loading={this.state.loading}
                  shops={this.state.shops}
                  filteredResults={this.state.filteredResults}
                  rating={this.state.rating}
                />
              )}
            />

            <Route
              path="/search"
              render={() => (
                <ShopSearch
                  loading={this.state.loading}
                  shops={this.state.shops}
                  filteredResults={this.state.filteredResults}
                  rating={this.state.rating}
                />
              )}
            />

            <Route
              path={`/shopDetail/:id`}
              render={routeProps => (
                <ShopDetails {...routeProps} shops={this.state.shops} />
              )}
            />
          </Switch>
      </Router>
    );
  }
}

export default App;
