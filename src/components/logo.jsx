import React from "react"
import Image from "./../img/logo.png"
import { Link } from "react-router-dom"

class Logo extends React.Component {
    render(){
        return(
        <Link to={'/'}><div className="logo">
            <img src={Image} alt="logo" />
            <p>MitMovie App</p>
        </div></Link>
        )
    }
}

export default Logo