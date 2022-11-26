import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book-logo.jpg'
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext)

    // handleLogout
    const handleLogout = () => {
        userLogout()
            .then(() => { })
            .catch(() => { })
    }
    const menuItems = <>
        <p className='mr-4'><Link to='/'>Home</Link></p>
        <p className='mr-4'><Link to='/blog'>Blog</Link></p>
        {user?.uid &&
            <p className='mr-4'><Link to='/dashboard'>Dashboard</Link></p>
        }
        {
            user?.uid ?
                <p className='mr-4'><button onClick={handleLogout}>Logout </button></p>
                :
                <p className='mr-4'><Link to='/login'>Login</Link></p>
        }
        <p className='mr-4'><Link to='/signUp'>Sign up</Link></p>
        {
            user?.uid ?
                <p className='mr-4'><Link >{user?.email}</Link></p>
                :
                <p className='mr-4'><button>No user </button></p>
        }
    </>
    return (
        <div className="navbar bg-base-200 h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl"><img className='h-10 w-10 mr-2' src={logo} alt="" /> Book-HUT</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}

                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn">Get started</a>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;