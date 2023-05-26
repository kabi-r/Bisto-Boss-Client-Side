import React from 'react';
import Cover from '../../Share/Cover/Cover';
import MenuItem from '../../../components/MenuItem/MenuItem';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const MenuCategory = ({title,items}) => {
    return (
        <div className='pt-8'>
            
            <div className='grid md:grid-cols-2 gap-11 my-16'>
                {
                    items.map(item => <MenuItem item={item} key={item._id} ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><Button className=' mx-auto mb-8'>Add to Cart</Button></Link>
        </div>
    );
};

export default MenuCategory;