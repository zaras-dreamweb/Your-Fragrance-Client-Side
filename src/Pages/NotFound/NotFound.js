import React from 'react';
import image from '../../images/done.png';

const NotFound = () => {
    return (
        <div className='container border-4 border-rose-200 border-x-rose-600 mt-16'>
            <div className='container mt-10 mb-8 border-4 border-rose-200 border-y-rose-600 '>
                <div className='container flex justify-center p-6'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;