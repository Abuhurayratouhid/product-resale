import React from 'react';
import pic1 from '../../assets/study spaces_1.jpg';
import pic2 from '../../assets/study-space-2.jpg';
import pic3 from '../../assets/study spaces-3.jpg';


const StudySpace = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <h1 className='text-5xl font-bold text-center mt-10'>Places to study </h1>
            <p className='text-center py-5'>Escape to a Reading Space: Where Words Take Flight and Imagination Soars</p>
            <div className='grid lg:grid-cols-3 gap-10'>
                <img data-aos="flip-left" data-aos-duration="3000" className='h-72' src={pic1} alt="" />
                <img data-aos="flip-left" data-aos-duration="3000" className='h-72' src={pic2} alt="" />
                <img data-aos="flip-left" data-aos-duration="3000" className='h-72' src={pic3} alt="" />
            </div>
        </div>

    );
};

export default StudySpace;