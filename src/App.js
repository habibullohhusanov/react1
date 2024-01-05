import Input from './components/UI/jsx/input';
import Select from './components/UI/jsx/select';
import HookForm from './components/hook/hookForm';
import HookPostList from './components/hook/hookPostList';
import './style/App.css';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "PHP", body: "Learned" },
    { id: 2, title: "PHYTON", body: "Learning" },
    { id: 3, title: "A REACT", body: "Learning" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  function getSortedPosts() {
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
    } else {
      return posts
    }
  }
  // const sortedPosts = getSortedPosts();
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // changed setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <HookForm create={createPost} />
      <div>
        <Input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search ..." />
        <Select value={selectedSort} defaultValue="Select one" options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Body" },
        ]}
        onChange={sortPosts}
        />
      </div>
      {posts.length !== 0
        ? <HookPostList remove={removePost} posts={getSortedPosts()} title={"PHP"} />
        : <div>Empty</div>

      }
    </div>
  );
}

export default App;
