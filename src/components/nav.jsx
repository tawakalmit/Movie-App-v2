import React from "react"
import Logo from "./logo"
import NavLink from "./link"
import MenuToggle from "./menutoggle"

class Nav extends React.Component {
    render(){
        return(
        <nav className="navbar">
            <Logo />
            <NavLink />
            <MenuToggle />
        </nav>
        )
    }
}

export default Nav