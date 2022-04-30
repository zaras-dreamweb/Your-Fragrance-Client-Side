import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='container w-25 text-center mt-10 border-4 border-rose-200  border-x-rose-500'>
                <p className='font-bold text-2xl'>CONTACT US</p>
                <Link to='' className='text-pink-700 text-xl'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></Link>
                <Link to='' className='text-pink-700 pl-4 pr-4 text-xl'> <FontAwesomeIcon icon={faAt}></FontAwesomeIcon></Link>
                <Link to='' className='text-pink-700 text-xl'> <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></Link>
            </div>
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <Link className='text-pink-700 font-semibold text-decoration-none' to="/">  Your Fragrance</Link>
            </div>
        </div>
    );
};

export default Footer;