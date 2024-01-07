import Button from './components/UI/jsx/button';
import Modal from './components/UI/jsx/modal';
import HookForm from './components/hook/hookForm';
import HookPostFilter from './components/hook/hookPostFilter';
import HookPostList from './components/hook/hookPostList';
import { usePosts } from './components/hook/use/usePosts';
import './style/App.css';
import { useMemo, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
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
      <HookPostList remove={removePost} posts={sortedAndSearchedPosts} title={"PHP"} />
    </div>
  );
}

export default App;
