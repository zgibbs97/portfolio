// src/App.js

import React from 'react';
import Header from './components/Header'
import './index.css';
import Portfolio from './components/Portfolio';


function App() {
  return ( 
    <div className='App'> 
    <Header />
    <Portfolio/>
    </div>
  );
}


export default App;