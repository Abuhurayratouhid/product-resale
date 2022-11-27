import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const {  userLogin,googleLogin } = useContext(AuthContext);
    // const [loginUserEmail, setLoginUserEmail] = useState('')
    
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit } = useForm();

    
    // console.log(loginUserEmail)

    // const [token] = useToken(user?.email)


    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                getToken(email)
                toast.success('login successful')
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getToken = (email)=>{
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {

                    // console.log(data)
                    localStorage.setItem('accessToken',data?.accessToken)
                    
                })
        }
        // console.log(email)

    }

    // handleGoogleLogin
    const handleGoogleLogin = ()=>{
        // console.log('google login clicked')
        googleLogin()
        .then(result => {
            const user = result.user;
            toast.success('login successful')
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })

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

                    <button type='submit' className="btn btn-active btn-primary w-full max-w-xs mt-4">login </button>
                    <label className="label">
                        <span className="label-text">Are you new here? <span><Link to='/signUp'><button className="btn btn-link">Sign up</button></Link></span></span>
                    </label>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full max-w-xs my-5"><span className='text-4xl'><FcGoogle></FcGoogle></span></button>
                </form>
            </section>
        </div>
    );
};

export default Login;