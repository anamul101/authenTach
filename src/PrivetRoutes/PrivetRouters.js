import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRouters = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <div className='text-center text-2xl mt-40 text-green-500'>Loader...</div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRouters;