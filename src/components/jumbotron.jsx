import React from "react"
import Image from "./../img/logo.png"
import Tombol from "./tombol"

class Jumbotron extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <img src={Image} alt="logo" />
                <p>Welcome to MitMovie</p>
                <h1>STREAMING FILMS</h1>
                <Tombol fname={<a href="#movies">Browse Movies</a>}/>
            </div>
        )
    }
}

export default Jumbotron