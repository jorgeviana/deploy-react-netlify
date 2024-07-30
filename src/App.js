import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

export const getCommitId = async () => {
  try {
    const response = await fetch('/commitId.txt');
    const commitId = await response.text();
    return commitId.trim();
  } catch (error) {
    console.error('Failed to fetch commit ID:', error);
    return 'unknown';
  }
};

function Revision() {
  const [commitId, setCommitId] = useState('');

  useEffect(() => {
      const fetchCommitId = async () => {
        const id = await getCommitId();
        setCommitId(id);
      };

      fetchCommitId();
    }, []);

  return (
    <span>rev {commitId}</span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, now!
        </a>
        <Revision />
      </header>
    </div>
  );
}

export default App;
