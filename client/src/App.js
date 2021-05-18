import './App.css';
import Topbar from './components/Topbar';
import TwitterFeed from './components/TwitterFeed';
import './client.js';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <TwitterFeed/>
    </div>
  );
}

export default App;
