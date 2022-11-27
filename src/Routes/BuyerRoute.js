import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
// import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import Loading from '../Shared/Loading/Loading';

const BuyerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();
    if(loading && isBuyerLoading){
        return <Loading></Loading>
    }
    if(!user && !isBuyer){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default BuyerRoute;