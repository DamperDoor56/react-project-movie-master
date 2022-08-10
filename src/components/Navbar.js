import React, {useEffect, useState} from "react";
import './Navbar.css'

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        })

    }, []);

    return (
        <div className={`nav-bar ${show && "nav_black" }`}>
            <h1 className="nav__logo" >MovieDB</h1>

            <img className="nav__avatar"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            />
        </div>

    )
}

export default NavBar;