import React from 'react';
import Banner from '../Pages/Home/Banner/Banner';
import Category from '../Pages/Home/Category/Category';
import Hero from '../Pages/Home/Hero/Hero';
import PopularMenu from '../Pages/Home/PopularMenu/PopularMenu';
import Call from '../Pages/Home/Call/Call';
import Feature from '../Pages/Home/Feature/Feature';
import Food from '../Pages/Home/Food/Food';
import Testimonial from '../Pages/Home/Testimonial/Testimonial';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Food></Food>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;