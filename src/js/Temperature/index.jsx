import React, { Component } from "react";

import Control from "./Control";
import Verdict from "./Verdict";

class Temperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0 // this should be in °Kelvin
    };

    this._handleTempChange = this._handleTempChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <h1>Temperature Converter</h1>
        {/* TODO you might want to put more props in the components */}
        <Control
          handleTempChange={this._handleTempChange}
          temp={this.state.temp}
          type="k"
        />
        <Control
          handleTempChange={this._handleTempChange}
          temp={((this.state.temp - 273.15) * 9) / 5 + 32}
          type="f"
        />
        <Control
          handleTempChange={this._handleTempChange}
          temp={this.state.temp - 273.15}
          type="c"
        />
        <Verdict 
        temp={this.state.temp}
        />
      </div>
    );

    // put your functions here
  }

  _handleTempChange(event, type) {
      let temp;
      if (type === "k") {
        temp = parseInt(event.target.value);
      } else if (type === "f") {
        temp = ((parseInt(event.target.value) - 32) * 5) / 9 + 273.15;
      } else if (type === "c") {
        temp = parseInt(event.target.value) + 273.15;
      }
      this.setState({
        temp: temp
      });
    }
  }


export default Temperature;
