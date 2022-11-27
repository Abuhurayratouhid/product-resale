import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
// import useAdmin from '../Hooks/useAdmin';
// import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Loading from '../Shared/Loading/Loading';

const SellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if(loading && isSellerLoading){
        return <Loading></Loading>
    }
    if(!user && !isSeller){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default SellerRoute;