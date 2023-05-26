import React from 'react';
import OrderCard from '../../Share/OrderCard/OrderCard';

const OrderTabs = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <OrderCard item={item} key={item._id}></OrderCard>)
            }
        </div>
    );
};

export default OrderTabs;