import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold my-5'>Welcome to dashboard</h1>
            <p className='text text-yellow-400 text-center text-2xl my-10'>Dashboard route will change based on user role</p>
            <div className='grid lg:grid-cols-2'>
                <div className='bg-gray-300 p-5 w-72 '>
                    <p className='text-primary my-4'>To visit Buyer route login with:</p>
                    <p><span className='text-yellow-500'>Email</span>:	realtom1@gmail.com</p>
                    <p><span className='text-yellow-500'>Password </span>: realtom</p>
                </div>
                <div className='bg-gray-300 p-5 w-72 '>
                    <p className='text-primary my-4'>To visit Seller route login with:</p>
                    <p><span className='text-yellow-500'>Email</span>: realtom22@gmail.com</p>
                    <p><span className='text-yellow-500'>Password</span>: realtom</p>
                </div>
            </div>
            <h1 className='text-center text-3xl text-primary my-10'>Admin can manage all route.We can't share Admin Info. sorry for that.</h1>
        </div>
    );
};

export default Dashboard;