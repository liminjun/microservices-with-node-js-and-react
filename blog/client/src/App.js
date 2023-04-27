import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <div>
      <h1>Create Post</h1>
        <PostCreate />
      </div>
    </div>
  );
}

export default App;
