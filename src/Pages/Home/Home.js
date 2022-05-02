import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Global from '../Global/Global';
import Intro from '../Intro/Intro';
import Offer from '../Offer/Offer';
import Perfumes from '../Perfumes/Perfumes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Perfumes></Perfumes>
            <Offer></Offer>
            <Global></Global>
            <Contact></Contact>
        </div>
    );
};

export default Home;