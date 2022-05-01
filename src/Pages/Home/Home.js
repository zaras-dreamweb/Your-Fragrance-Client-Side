import React from 'react';
import Banner from '../Banner/Banner';
import Global from '../Global/Global';
import Intro from '../Intro/Intro';
import Offer from '../Offer/Offer';
import Perfume from '../Perfume/Perfume';
import Perfumes from '../Perfumes/Perfumes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Perfumes></Perfumes>
            <Offer></Offer>
            <Global></Global>
        </div>
    );
};

export default Home;