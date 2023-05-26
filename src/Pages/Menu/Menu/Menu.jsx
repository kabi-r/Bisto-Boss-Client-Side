import React from 'react';
import Cover from '../../Share/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertsImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../components/Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const offered = menu.filter(item => item.category === 'offered')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className='mb-36'>
            {/* menu Category */}
            <Cover image={menuImg} title={'OUR MENU'} ></Cover>
            <SectionTitle subHeading="---Don't miss---" heading={"TODAY'S OFFER"} ></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            {/* Desserts Category */}
            <Cover image={dessertsImg} title={'Desserts'}></Cover>
            <MenuCategory items={desserts} ></MenuCategory>
            {/* Pizza Category */}
            <Cover image={pizzaImg} title={'Desserts'}></Cover>
            <MenuCategory items={pizza} ></MenuCategory>
            {/* salad Category */}
            <Cover image={saladImg} title={'Pizza'}></Cover>
            <MenuCategory items={salad} ></MenuCategory>
        </div>
    );
};

export default Menu;