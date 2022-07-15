import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom"

class Card extends Component {
  render() {
    return (
      <div className="movie-list-item">
        <Link to={this.props.navigate}>
        <img
          src={
            this.props.image
              ? `https://image.tmdb.org/t/p/w500${this.props.image}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={this.props.title}
          height="750"
        />
        <p className="">{this.props.title}</p>
        <p className="">{this.props.votes}</p>
        </Link>
        <Button label="Add to favorite" />
      </div>
    );
  }
}

export { Card };
