import React from "react"
import {Link} from "react-router-dom"

class NavLink extends React.Component {
    render(){
        return(
        <ul>
            <Link to={'/'}><li><a>Home</a></li></Link>
            <li><a href="#about">About</a></li>
            <li><a href="#movies">Movies</a></li>
        </ul>
        )
    }
}

export default NavLink