import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HomepageContent from './components/homepage/Homepage-Content';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header1/>
      <HomepageContent/>
    </div>
  );
}

export default App;
