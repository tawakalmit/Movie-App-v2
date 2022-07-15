import React, { Component } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import Modal from "../components/modal";
import Nav from "../components/nav";
import Jumbotron from "../components/jumbotron";
import About from "../components/about";
import Footer from "../components/footer";
import {WithRouter} from "../utils/navigation"

class HomePage extends Component {
  // constructor
  state = {
    title: "-",
    content: "This is the home page",
    page: 1,
    datas: [],
    information: {},
    loading: false,
  };
  
  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=4e9db22c13a77b3b2d0ba12ec184de7c&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          this.setState({ datas: results });
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }



  render() {
    return (
      <>
        <Modal />
        <Nav />
        <Jumbotron />
        <About />
          <div className="movies">
            <h2>Our Movies</h2>
            <div className="movie-list">
              {this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  votes={data.vote_average}
                  navigate={`/detail/${data.id}`}
                />
              ))}
            </div>
          </div>
        <Footer />
      </>
    );
  }
}

export default WithRouter(HomePage);