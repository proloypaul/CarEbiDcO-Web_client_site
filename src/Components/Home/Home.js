import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;