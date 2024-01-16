import Button from './../components/UI/jsx/button';
import Modal from './../components/UI/jsx/modal';
import HookForm from './../components/hook/hookForm';
import HookPostFilter from './../components/hook/hookPostFilter';
import HookPostList from './../components/hook/hookPostList';
import { usePosts } from './../components/hook/use/usePosts';
import { useEffect, useState } from 'react';
import PostService from './../API/postSrvice';
import './../style/App.css';
import { useFetching } from './../components/hook/use/useFetching';
import { getPageCount } from './../utils/pages';
import Pagination from './../components/UI/jsx/pagination';
import Loading from '../components/UI/jsx/loading';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, postIsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <div>
        <Button onClick={(e) => setModal(true)}>Create</Button>
        <Modal visiable={modal} setVisiable={setModal}>
          <HookForm create={createPost} />
        </Modal>
      </div>
      <HookPostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error {postError}</h1>}
      {postIsLoading
        ? <Loading />
        : <HookPostList remove={removePost} posts={sortedAndSearchedPosts} title={"PHP"} />
      }
      <h1>Current page: {page}</h1>
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
