import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const {authUser, logout} = useAuth()

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">ShopHub</Link>
                <div className="navbar-links">
                    <Link to="/" className='navbar-link'>Home</Link>
                    <Link to="/checkout" className='navbar-link'>Checkout</Link>
                </div>
                <div className="navbar-auth">
                    {!authUser ? <div className="navbar-auth-links">
                        <Link to="/auth" className='btn btn-secondary'>Login</Link>
                        <Link to="/auth" className='btn btn-primary'>Signup</Link>
                    </div>
                    : (
                        <div className="navbar-user">
                            <span className='navbar-greeting'>Hello, {authUser}</span>
                            <button type='button' className='btn btn-secondary' onClick={logout}>Logout</button>
                        </div>
                    )
                    }
                </div>
            </div>
        </nav>
    )
}