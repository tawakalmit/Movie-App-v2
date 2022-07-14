import React from "react"
import Image from "./../img/logo.png"
import Tombol from "./tombol"

class Jumbotron extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <img src={Image} alt="logo" />
                <p>Welcome to MitMovie</p>
                <h1>STREAMING FILMS FEATURE,</h1>
                <h1>TELEVISION & GAMES</h1>
                <Tombol fname="Browse Movies"/>
            </div>
        )
    }
}

export default Jumbotron