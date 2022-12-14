import React from 'react';
import './App.css';
import {Convo} from "./components/Convo/Convo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to your Interview Chat.</h1>
      </header>
      <h2>My name is Alice Bronwyn, Head Fellow at PETA.<br />I did my JD at Georgetown Law.<br /> Today I will be conducting your interview.</h2>
        <Convo/>
      <footer>
        <p>For BB Interview, 2022</p>
      </footer>
    </div>
  );
}

export default App;
