import { faArrowAltCircleRight, faPlaneCircleCheck, faTruckLoading, faSailboat, faCarRear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../images/pink-W.png'
import React from 'react';
import { Card } from 'react-bootstrap';

const
    Global = () => {
        return (

            <div className='container w-full overflow-hidden grid sm:grid-cols-1 lg:grid-cols-2 h-60 mt-10 bg-gradient-to-t from-red-300 to-black pt-10 pb-10' >
                <div>
                    <Card className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Text className='text-center text-3xl pt-6 pb-6 bg-black text-rose-700'>
                                We Ship Internationally
                            </Card.Text>
                        </Card.Body>
                        <p className='text-4xl text-center text-black'>
                            <FontAwesomeIcon icon={faPlaneCircleCheck}></FontAwesomeIcon>
                            <FontAwesomeIcon className='pl-4 pr-6 text-6xl' icon={faTruckLoading}></FontAwesomeIcon>
                            <FontAwesomeIcon className='pl-3 pr-5' icon={faSailboat}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon>
                        </p>
                    </Card>
                </div>
                <div className='ml-20 mb-4'>
                    <img style={{ height: '190px' }} src={img} alt="" />
                </div>
            </div >

        );
    };

export default Global;