import React, { Component } from "react";
import { WithRouter } from "../utils/navigation";
import axios from "axios"
import Nav from "../components/nav";

export class DetailMovie extends Component {
  state = {
    detailMovie:[],
  }

  componentDidMount(){
    this.fetchData();
  }

  async fetchData(){
    this.setState({loading:true});
    const { movie_id } = this.props.params;
    await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=4e9db22c13a77b3b2d0ba12ec184de7c&language=en-US`)
    .then((response)=>{
      const { data } =response;
      this.setState({ detailMovie:data});
    })
    .catch((error)=>{
      alert(error.toString());
    })
    .finally(()=>this.setState({loading:false}));
  }
  
  render() {
    return(
    <>
    <Nav />
    <div className="detail-movie">
      <img
          src={`https://image.tmdb.org/t/p/w500${this.state.detailMovie.poster_path}`
          }
          alt={this.state.detailMovie.title}
        />
      <div className="get-details">
        <h1>{this.state.detailMovie.title}</h1>
        <h2>overview</h2>
        <p>{this.state.detailMovie.overview}</p>
      </div>
    </div>
    </>
    );
  }
}

export default WithRouter(DetailMovie);
