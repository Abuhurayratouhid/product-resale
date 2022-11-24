import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit} = useForm();


    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold'>Please login  </h1>

            <section className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email')} placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Password </span>
                    </label>
                    <input type="password" {...register('password')} placeholder="password" className="input input-bordered input-info w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Are you new here? <span><Link to='/signUp'><button className="btn btn-link">Sign up</button></Link></span></span>
                    </label>
                    <button type='submit' className="btn btn-active btn-primary w-full max-w-xs">Button</button>
                </form>
            </section>
        </div>
    );
};

export default Login;