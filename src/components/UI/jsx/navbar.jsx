import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Navbar() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  )
}

export default Navbar