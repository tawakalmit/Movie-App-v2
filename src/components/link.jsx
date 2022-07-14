import React from "react"

class Link extends React.Component {
    render(){
        return(
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Movies</a></li>
        </ul>
        )
    }
}

export default Link