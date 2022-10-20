// Import data
import React from 'react';
// Import components
import './App.css';
import Searchbar from './Searchbar';
import Directory from './Directory';
import Gallery from './Gallery';

function App(){
  return (
    <>
      <div>
        <Searchbar />
      </div>
      <div>
        <Directory />
      </div>
      <div>
        <Gallery />
      </div>
    
    </>

  )
}

export default App;
