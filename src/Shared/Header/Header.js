import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return (
        <div>
            <Navbar className="navbar navbar-expand-sm fixed top-0 bg-gradient-to-t from-black to-red-300 navbar-dark " expand="lg">
                <Container fluid>

                    <Link className="navbar-brand font-bold italic" to="/"><FontAwesomeIcon className="text-2xl" icon={faSprayCanSparkles}></FontAwesomeIcon> Your Fragrance</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/blogs">Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        {
                                            user && <>
                                                <Link className="nav-link" to="/manageInventory">Manage Inventory</Link>
                                            </>
                                        }
                                    </li>
                                    <li className="nav-item">
                                        {
                                            user && <>
                                                <Link className="nav-link" to="/addInventory">Add Inventory</Link>
                                            </>
                                        }
                                    </li>
                                    <li className="nav-item">
                                        {
                                            user && <>
                                                <Link className="nav-link" to="/myItems">My Items</Link>
                                            </>
                                        }
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link " to="/register">Register</Link>
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;