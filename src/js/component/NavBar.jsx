import React from 'react'

const NavBar = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-dark bg-dark">
                <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
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
                            <a className="nav-link " href="Contact" >Contact</a>
                        </li>
                    </ul>
                </div>
                </button>
            </nav> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" >Start Bootstrap</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" >Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default NavBar
