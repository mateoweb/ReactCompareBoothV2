import React, { Component } from "react";
import ShopPreview from "./ShopPreview";
import ShopSearch from "./ShopSearch";

import Header from "./Header"
import MoreFilters from "./MoreFilters"

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
       <Header
          handleChanges={this.handleChanges}
          isClicked={this.isClicked}
          filterClick={this.filterClick}
          moreFilterClick={this.moreFilterClick}
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

        {this.state.isMoreFiltersRequired ? 
          <MoreFilters
            handleChanges={this.handleChanges}
            isClicked={this.isClicked}
            filterClick={this.filterClick}
            moreFilterClick={this.moreFilterClick}
            filteredResults={this.state.filteredResults}
          /> : null
        }

        <React.Fragment>
          {this.state.isNotClicked && (
            <ShopPreview
              loading={this.state.loading}
              shops={this.state.shops}
              filteredResults={this.state.filteredResults}
            />
          )}
          {this.state.isClicked && (
            <ShopSearch
              loading={this.state.loading}
              filteredResults={this.state.filteredResults}
              shops={this.state.shops}
            />
          )}
        </React.Fragment>

      </div>
    );
  }
}


export default Home;
