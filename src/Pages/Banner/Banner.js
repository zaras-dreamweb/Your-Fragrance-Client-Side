import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../images/banner2.png'

const Banner = () => {
    return (
        <div>
            <img
                className="d-block w-100"
                src={banner}
                alt="First slide"
            />

            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default Banner;