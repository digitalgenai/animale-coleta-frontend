/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider';
import { AXIOS } from '../services';

const RotaProtegida = ({ children }) => {
    const { token } = useContext(AuthContext);
    const location = useLocation();
    
    AXIOS.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
    AXIOS.defaults.headers.common['Content-Type'] = 'application/json';

    if (!token && location.pathname.startsWith('/admin')) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RotaProtegida;