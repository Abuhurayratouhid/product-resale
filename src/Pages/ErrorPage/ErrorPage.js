import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/404page.jpg';

const ErrorPage = () => {
    return (
        <div>
            <p className='text-center'><Link to='/'><button className='btn mt-4'>Go back to home </button></Link></p>
            <div className='min-h-screen flex justify-center items-center'>

                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;