import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import Navbar from '../../Shared/Header/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>Dashboard  </Link></li>
                        {!isAdmin && !isBuyer && !isSeller && <li><Link to='/dashboard/myOrders'>My Orders </Link></li>}
                        
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addProduct'>Add a product </Link></li>
                                <li><Link to='/dashboard/myProduct'>My product</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link to='/dashboard/myOrders'>My Orders </Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All users </Link></li>
                                <li><Link to='/dashboard/allOrders'>All orders </Link></li>
                                <li><Link to='/dashboard/sellers'>Sellers  </Link></li>
                                <li><Link to='/dashboard/buyers'>buyers</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;