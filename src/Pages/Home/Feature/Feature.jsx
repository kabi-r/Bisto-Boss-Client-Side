import React from 'react';
import './Feature.css'
import image from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Button } from 'flowbite-react';

const Feature = () => {
    return (
        <div className='feature-item bg-fixed bg-slate-500 bg-opacity-50 pt-8 my-20'>
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='md:flex bg-slate-500 bg-opacity-50 justify-center items-center pb-20 pt-12 px-36 '>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='md:ml-10  text-white text-start'>
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <Button outline={true}>Go back</Button>
            </div>
            </div>
        </div>
    );
};

export default Feature;