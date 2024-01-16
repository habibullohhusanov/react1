import React, { useContext } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../context'
import Button from './button';

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logOut = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  }
  return (
    <div>
      <Button onClick={logOut}>Button</Button>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  )
}

export default Navbar