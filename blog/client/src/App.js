import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <div>
      <h1>Create Post</h1>
        <PostCreate />
        <hr/>
        <h1>Posts</h1>
        <PostList />
      </div>
    </div>
  );
}

export default App;
