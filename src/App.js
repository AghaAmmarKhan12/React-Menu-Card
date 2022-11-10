import React from 'react';
import './App.css'
import All from './Components/All';
import Header from './Components/Header/Header';
// import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navbar/> */}
      <All></All>
    </div>
  );
}

export default App;
