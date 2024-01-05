import React, { useState } from 'react'
import Input from '../UI/jsx/input'
import Button from '../UI/jsx/button'

function HookForm({create}) {
  const [post, setPost] = useState({ title: '', body: '' });
  const submit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    create(newPost);
    setPost({title: '', body: ''});
  }
  return (
    <form action="">
      <b>
        <p>{post.title}</p>
      </b><b>
        <p>{post.body}</p>
      </b>
      <Input type="text" placeholder="title" value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
      <Input type="text" placeholder="body" value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} />
      <Button onClick={submit}>OK</Button>
    </form>
  )
}

export default HookForm