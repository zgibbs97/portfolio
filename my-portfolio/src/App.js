// src/App.js

import React from 'react';
import Header from './components/Header'
import './index.css';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';


function App() {
  return ( 
    <div className='App'> 
    <Header />
    <Portfolio/>
    <Bio/>
    </div>
  );
}


export default App;