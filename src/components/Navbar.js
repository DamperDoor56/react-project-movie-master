import React from "react";
import './Navbar.css'

function NavBar() {
    return (
        <div className="nav-bar">
            <h1 className="nav__logo" >MovieDB</h1>

            <img className="nav__avatar"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            />
        </div>

    )
}

export default NavBar;