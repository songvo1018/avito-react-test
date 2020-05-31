import React from 'react';
import './App.css';

import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
