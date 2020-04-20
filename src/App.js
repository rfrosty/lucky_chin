import React from 'react';
import './App.css';
import HomepageContent from './components/homepage/Homepage-Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from './components/inventory/Inventory';
import Suppliers from './components/suppliers/suppliers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header1 from './components/Header1';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Header1/>
      <Switch>
      <Route path="/" exact component={HomepageContent} />
      {/* <HomepageContent/> */}
      <Route path="/Inventory" component={Inventory} />
      <Route path="/supplier" component={Suppliers}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
