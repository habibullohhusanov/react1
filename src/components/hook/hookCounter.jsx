import React, { useState } from 'react'

function HookCounter() {
  const [count, setCount] = useState(0)
  function plus() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={minus}>MINUS</button>
      <button onClick={plus}>PLUS</button>
    </div>
  )
}

export default HookCounter