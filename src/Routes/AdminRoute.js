import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if(loading && isAdminLoading){
        return <Loading></Loading>
    }
    if(!user && !isAdmin){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default AdminRoute;