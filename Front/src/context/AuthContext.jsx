import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("El useAuth deberia estar dentro de un AuthProvider")
    }
    return context;
}

export const AuthProvider = ({ children }) => { // recibe un elemento hijo (children)
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAutenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAutenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAutenticated(true)
            setUser(res.data)
        } catch (error) {
            console.log(error.response.data)
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }

            setErrors([error.response.data.msg])
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setIsAutenticated(false);
        setUser(null);
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAutenticated(false)
                setLoading(false)
                return setUser(null)

            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                /* console.log(res) */
                if (!res.data) {
                    setIsAutenticated(false);
                    setLoading(false)
                    return
                }


                setIsAutenticated(true);
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                setIsAutenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                logout,
                loading,
                user,
                isAuthenticated,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}