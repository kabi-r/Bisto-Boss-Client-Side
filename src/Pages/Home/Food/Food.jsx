import React, { useEffect, useState } from 'react';
import ShowFood from './ShowFood';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Food = () => {
    const [foods, setFood] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const showData = data.slice(0,3)
            setFood(showData)})
    })
    return (

        <div className='my-16'>
            <SectionTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
            {
                foods.map(food => <ShowFood food={food} key={food._id} ></ShowFood>)
            }
        </div>
        </div>
    );
};

export default Food;