import React from 'react';
import Cover from '../../Share/Cover/Cover';
import MenuItem from '../../../components/MenuItem/MenuItem';

const MenuCategory = ({cover, img, title, items}) => {
    return (
        <div className='pt-8'>
            
            <div className='grid md:grid-cols-2 gap-11 my-16'>
                {
                    items.map(item => <MenuItem item={item} key={item._id} ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;