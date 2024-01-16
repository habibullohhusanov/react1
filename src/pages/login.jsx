import React from 'react'
import Input from '../components/UI/jsx/input'
import Button from '../components/UI/jsx/button'
import { useContext } from 'react'
import { AuthContext } from '../context'

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", true);
    }
    return (
        <div>
            <form onSubmit={login}>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button>Log in</Button>
            </form>
        </div>
    )
}

export default Login