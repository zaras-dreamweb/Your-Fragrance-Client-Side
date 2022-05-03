import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>

                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <Link className='text-pink-700 font-semibold text-decoration-none' to="/">  Your Fragrance</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;