import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ isAuthenticated }) => {
    const { authUser } = useAuth()
    // If not authenticated, redirect to the login page
    if (!authUser) {
        return <Navigate to="/auth" replace />;
    }

    // If authenticated, render the child routes using Outlet
    return <Outlet />;
};

export default ProtectedRoute