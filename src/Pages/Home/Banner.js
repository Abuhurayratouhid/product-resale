import React from 'react';
import banner from '../../assets/banner-1.webp';
import banner2 from '../../assets/Banner-2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className=''>
            <div style={{background:`url(${banner2})`, }} className="overly h-[600px] w-full">
            <div className=' overly h-[600px] pl-10'>
                <h1  className='text-6xl  text-white pt-32 font-bold pr-10'><span>Buy your book </span>  <span className=''> <br /> from</span> <span> here </span></h1>
                <button className='btn btn-primary '>order now </button>
            </div>
        </div>
        </div>
    );
};

export default Banner;