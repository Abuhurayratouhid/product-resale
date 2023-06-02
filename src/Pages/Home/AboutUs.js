import React from 'react';
import bookShop from '../../assets/Bookshop.png';

const AboutUs = () => {
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='w-full p-10'>
                <img src={bookShop} className='w-full lg:h-[500px]' alt="about us pic" />
            </div>
            <div className='w-full  flex justify-center items-center'>
               <div className='lg:w-[499px]'>
                <h1 className='text-4xl font-bold pb-5 text-center lg:text-start'>About Book-HUT</h1>
                <p className='text-center lg:text-start'>Book-HUT provides a diverse selection of courses covering various subjects, including academic disciplines, vocational skills, professional development, and personal interests.</p>
                <button className="btn btn-link mt-5">more...</button>
               </div>
            </div>
        </div>
    );
};

export default AboutUs;