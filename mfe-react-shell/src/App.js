import "./App.css";
import React, { useEffect, useState } from "react";
import RemoteAppModule from "./modules/AppModule";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    setCounter(e?.detail)
  }

  useEffect(() => {
    window.addEventListener('counter', handleClick);
    return () => {
      window.removeEventListener('counter', handleClick);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className='navbar'>
            <h1 className="title-text">React MFE</h1>
            <div className='counter-container'>
              <h2 className='counter-text'>counter: {counter}</h2>
            </div>
          </div>
          <RemoteAppModule></RemoteAppModule>
        </div>
      </header>
    </div>
  );
}

export default App;
