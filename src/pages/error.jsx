import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min'

function Error() {
  return (
    <div>
        Page nout Fount
        <BrowserRouter>
            <Route to="/about">Back</Route>
        </BrowserRouter>
    </div>
  )
}

export default Error