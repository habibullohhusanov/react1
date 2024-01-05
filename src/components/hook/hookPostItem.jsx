import React from 'react'
import Button from '../UI/jsx/button'

function HookPostItem({ post, number, remove }) {

  return (
    <div>
      <div>
        <h1>{number}</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <div>
        <Button onClick={() => remove(post)} >Remove</Button>
      </div>
    </div>
  )
}

export default HookPostItem