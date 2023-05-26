import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe,} = item
    return (
        <div className='flex space-x-8'>
            <img className='w-[118px] h-[104px]' style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div className='text-start'>
                <h3 className='uppercase'>{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-400'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;