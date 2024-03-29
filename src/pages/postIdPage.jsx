import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useFetching } from '../components/hook/use/useFetching';
import PostService from '../API/postSrvice';
import Loading from '../components/UI/jsx/loading';

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
  });
  return (
    <div>
      {isLoading
        ? <Loading />
        : <div>
          <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      }

      {error && <h1>Error {error}</h1>}
    </div>
  )
}

export default PostIdPage