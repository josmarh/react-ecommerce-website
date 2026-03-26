import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [authUser, setUser] = useState(
        localStorage.getItem("currentUserEmail")
        ? localStorage.getItem("currentUserEmail")
        : null
    )
    const navigate = useNavigate()

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")

        if(users.length && users.find(u => u.email === email)) {
            return {success: false, error: {message: 'Email already exists'}}
        }

        const newUser = {email, password}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("currentUserEmail", email)

        setUser({ email })

        return {success: true, message: 'Sign up successful'}
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")

        const user = users.find(
            u => u.email === email && u.password === password
        )

        if(!user) {
            return {success: false, error: {message: 'Invalid email or password'}}
        }

        localStorage.setItem("currentUserEmail", email)

        setUser({ email })

        return {success: true, message: 'Login successful'}
    }

    function logout() {
        localStorage.removeItem("currentUserEmail")
        setUser(null)
        navigate("/auth")
    }

    return <AuthContext.Provider value={{signUp, authUser, login, logout}}>{children}</AuthContext.Provider>
}

// Custom hook
export function useAuth() {
    const context = useContext(AuthContext);
    return context
}