import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App" style={{padding: 100}}>
      <button
        className="btn btn-secondary"
        onClick={() => setShow(!show)}
      >Toggle</button>
      <br/>
      {show && <Content/>}
    </div>
  );
}

export default App;
