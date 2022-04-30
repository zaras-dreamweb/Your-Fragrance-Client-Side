import { faArrowAltCircleRight, faPlaneCircleCheck, faTruckLoading, faSailboat, faCarRear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../images/pink-W.png'
import React from 'react';

const Global = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-60 mt-10 bg-gradient-to-t from-red-300 to-black pt-10 pb-10'>
            <div className='ml-24 mb-4'>
                <img style={{ height: '190px' }} src={img} alt="" />
            </div>
            <div className='pl-20 mt-10'>
                <span className='w-25 pb-6 pt-6 p-16  text-center text-2xl font-semibold bg-black text-pink-500'>We Ship Internationally</span>
                <p className='text-6xl mt-8 pl-2 text-black'><FontAwesomeIcon icon={faPlaneCircleCheck}></FontAwesomeIcon>
                    <FontAwesomeIcon className='pl-4 pr-6' icon={faTruckLoading}></FontAwesomeIcon>
                    <FontAwesomeIcon className='pl-3 pr-5' icon={faSailboat}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon>
                </p>
            </div>

        </div>
    );
};

export default Global;