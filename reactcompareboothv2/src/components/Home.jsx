import React, { Component } from "react";
import ShopPreview from "./ShopPreview";
import ShopSearch from "./ShopSearch";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.isNotClicked && (
          <ShopPreview
            loading={this.props.loading}
            shops={this.props.shops}
            filteredResults={this.props.filteredResults}
          />
        )}
        {this.props.isClicked && (
          <ShopSearch
            loading={this.props.loading}
            filteredResults={this.props.filteredResults}
            shops={this.props.shops}
          />
        )}

      </div>
    );
  }
}

export default Home;
