import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-lime-200">
                <div className="container-fluid">
                    <h1 className="text-decoration-none text-4xl font-bold text-white">Perfume 11</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav> */}

            <header>

            </header>
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="#">Perfume 11</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="sticky-top bg-white hidden-spacer"> </div>

        </div>
    );
};

export default Header;