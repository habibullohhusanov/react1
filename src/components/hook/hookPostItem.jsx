import React from 'react'
import Button from '../UI/jsx/button'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function HookPostItem({ post, number, remove }) {
  const router = useHistory();
  return (
    <div>
      <div>
        {/*<h1>{number}</h1>*/}
        <h1>{post.id}</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <div>
        <Button onClick={() => remove(post)} >Remove</Button>
        <Button onClick={() => router.push(`/posts/${post.id}`)} >Show</Button>
      </div>
    </div>
  )
}

export default HookPostItem