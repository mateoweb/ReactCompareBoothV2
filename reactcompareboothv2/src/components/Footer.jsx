import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";

class Footer extends Component {
  state = {};
  render() {
    return (
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem",
          marginTop: "50px"
        }}
        stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
        }}
      >
        Add any footer markup here
      </StickyFooter>
    );
  }
}

export default Footer;
