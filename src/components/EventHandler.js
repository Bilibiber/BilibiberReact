import React, { Component } from "react";
import Parent from "./Parent";
class EventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hi"
    };
  }

  clickHandler = (params) => {
    console.log(`Yo this is Mason ${params}`);
  };

  render() {
    return (
      <div>
        <Parent eventHandler={this.clickHandler} />
      </div>
    );
  }
}

export default EventHandler;
