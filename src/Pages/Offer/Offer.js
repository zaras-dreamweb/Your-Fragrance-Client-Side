import React from 'react';
import photo from '../../images/mem.png'

const Offer = () => {
    return (
        <div className='container border-4 border-rose-200 border-y-rose-500 mt-7'>
            <h2 className='text-center text-4xl mt-2'><span className='text-black'> OUR </span><span className='text-rose-500'>DISCOUNT</span><span className='text-black'> REMINDER</span></h2>
            <div className='container mt-10 mb-8 border-4 border-rose-200 border-x-rose-500  text-pink-500'>
                <div className='container grid gap-10 grid-cols-1 md:grid-cols-2'>
                    <div className='italic text-pink-600 text-4xl pt-6'>
                        <p> <span className='text-rose-800 font-bold'>Platinum</span>  Card Memebers: <span className='text-rose-800 font-bold'>15%</span> discount on every purchase</p>
                        <p> <span className='text-rose-800 font-bold'>Gold</span>  Card Memebers: <span className='text-rose-800  font-bold'>10%</span> discount on every purchase</p>
                        <p> <span className='text-rose-800 font-bold'>Silver</span>  Card Memebers: <span className='text-rose-800 font-bold'>5%</span> discount on every purchase</p>
                    </div>
                    <div className='w-75 mx-auto flex justify-center items-center'>
                        <div className='relative border-0 border-white'>
                            <img src={photo} alt="cards" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;