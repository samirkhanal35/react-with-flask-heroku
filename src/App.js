import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  var [message, setMessage] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setMessage(data.msg);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        

        <p>The Message is {message}.</p>
      </header>
    </div>
  );
}

export default App;