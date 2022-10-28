import './App.css';
import { useState } from 'react';
import Inputs from './components/Inputs.js';
import Datafeed from './components/Datafeed.js';

const App = () => {
  const [feed, setFeed] = useState([]);

  const updateFeed = (name, activity, cost) => {
    setFeed([
      ...feed,
      {
        name: [name, activity, cost]
      }
    ])
  };

  return (
    <div className="App">
      <header className="App-header">
        <Inputs updateFeed={updateFeed} />
      </header>
      <Datafeed feed={feed} />
    </div>
  );
}

export default App;
