import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mb-8 mt-10'>
            <p className='text-yellow-400 text-xl italic mb-4'>{subHeading}</p>
            <h3 className='text-4xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;