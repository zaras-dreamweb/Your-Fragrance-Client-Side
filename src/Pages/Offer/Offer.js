import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import photo from '../../images/logo3.png'

const Offer = () => {
    return (
        <div className='container border-4 border-rose-200 border-y-rose-500 mt-7'>
            <div className='container mt-10 mb-8 border-4 border-rose-200 border-x-rose-500  text-pink-500'>
                <div className='container grid gap-10 grid-cols-1 md:grid-cols-2'>
                    <div className='italic text-pink-600 text-4xl pt-6'>
                        <p>'No elegance is possible without perfume. It is the unseen, unforgettable, ultimate accessory....<br />
                            Your fragrance is your message, your scented slogan....' </p>
                    </div>
                    <div className='w-50 mx-auto'>
                        <div className='relative border-0 border-white'>
                            <img src={photo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;