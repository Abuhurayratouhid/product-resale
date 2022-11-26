import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const { user, createUser,updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail]= useState('');



    // console.log(createdUserEmail)

    const [token] = useToken(user?.email)
    // console.log(token)


   

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const account = data.accountType;
        const email = data.email;
        const password = data.password;
        // console.log(account, email, password)
        
        
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('sign up successful')
                handleUpdateProfile(name, email, account)
                saveUser(name, email,account)
                
                
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleUpdateProfile = (name, email, account)=>{
        const userInfo = {
            displayName: name,
            email,
            account
        }
        // console.log(userInfo)
        updateUser(userInfo)
    }

    const saveUser = (name,email,account) =>{
        const userInfo ={
            name,
            email,
            account
        }
        // request to save user in DB 
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            // setCreatedUserEmail(email)
            console.log(email)
            // navigate('/')
            // console.log(data)
        })

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
                        <span className="label-text">Choose your account type </span>
                    </label>
                    <select {...register('accountType')} className="select select-bordered w-full max-w-xs">
                        <option  selected>Buyer</option>
                        
                        <option>Seller</option>
                    </select>

                    <button type='submit' className="btn btn-active btn-primary w-full max-w-xs mt-4">sign up</button>
                    <label className="label">
                        <span className="label-text">Already have an account? <span><Link to='/login'><button className="btn btn-link">Login </button></Link></span></span>
                    </label>
                </form>
            </section>
        </div>
    );
};

export default SignUp;