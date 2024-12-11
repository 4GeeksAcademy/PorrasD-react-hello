import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contact" >Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
