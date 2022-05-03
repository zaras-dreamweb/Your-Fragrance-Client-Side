import React from 'react';
import banner from '../../images/banner3.png'

const Banner = () => {
    return (
        <div>
            <img
                className="d-block w-100"
                src={banner}
                alt="First slide"
            />
        </div>
    );
};

export default Banner;