import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        console.log(name, email, password)
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold'>Sign up </h1>

            <section className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register('name')} placeholder="name" className="input input-bordered input-info w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email')} placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Password </span>
                    </label>
                    <input type="password" {...register('password')} placeholder="password" className="input input-bordered input-info w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Already have an account? <span><Link to='/login'><button className="btn btn-link">Login </button></Link></span></span>
                    </label>
                    <button type='submit' className="btn btn-active btn-primary w-full max-w-xs">Button</button>
                </form>
            </section>
        </div>
    );
};

export default SignUp;