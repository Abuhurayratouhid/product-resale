import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;