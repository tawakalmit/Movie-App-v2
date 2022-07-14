import React from "react"

class Tombol extends React.Component {
    render(){
        return(
            <button><a href={this.props.href}>{this.props.fname}</a></button>
        )
    }
}

export default Tombol