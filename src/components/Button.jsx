import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button className="movie-list-item">
        {this.props.label}
      </button>
    );
  }
}
