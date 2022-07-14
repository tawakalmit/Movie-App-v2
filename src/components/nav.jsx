import React from "react"
import Logo from "./logo"
import Link from "./link"
import MenuToggle from "./menutoggle"

class Nav extends React.Component {
    render(){
        return(
        <nav className="navbar">
            <Logo />
            <Link />
            <MenuToggle />
        </nav>
        )
    }
}

export default Nav