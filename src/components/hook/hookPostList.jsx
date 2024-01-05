import React from 'react'
import HookPostItem from './hookPostItem'

function HookPostList({ posts, title, remove }) {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) =>
        <HookPostItem key={post.id} number={index + 1} post={post} remove={remove} />
      )}
    </div>
  )
}

export default HookPostList