import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return (
        <div>

            <nav className="navbar navbar-expand-sm fixed-top navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="#">Your Fragrance</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user
                                        ?
                                        <button onClick={handleSignOut} className='text-bold pb-2 text-white pt-2'>SignOut</button>
                                        :
                                        <Link className="nav-link" to="/login">Login</Link>
                                }
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