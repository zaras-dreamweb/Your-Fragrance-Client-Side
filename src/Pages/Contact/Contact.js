import { faAt, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className='container w-50 text-center mt-10 border-4 border-rose-200  border-x-rose-500'>
                <p className='font-bold text-xl'>CONTACT US</p>
                <Link to='' className='text-pink-700 text-xl'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></Link>
                <Link to='' className='text-pink-700 pl-4 pr-4 text-xl'> <FontAwesomeIcon icon={faAt}></FontAwesomeIcon></Link>
                <Link to='' className='text-pink-700 text-xl'> <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></Link>

            </div>
        </div>
    );
};

export default Contact;