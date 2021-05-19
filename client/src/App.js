import './App.css';
import Topbar from './components/Topbar';
import TwitterFeed from './components/TwitterFeed';
import Tweet from './components/Tweet';
import './client.js';

const serverURL = "http://localhost:8000/tweets"; 





function App() {
  return (
    <div className="App">
      <Topbar/>
      <TwitterFeed/>
    </div>
  );
}

export default App;
