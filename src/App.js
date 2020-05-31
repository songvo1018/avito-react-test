import React from 'react';
import './App.css';

import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      {/* 
        Header -> Logo
        Gallery -> row > 3 photo
        Footer -> text
       */}

      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
