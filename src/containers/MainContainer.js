import React from 'react';
import NavBar from '../NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryContainer from './inventory/InventoryContainer.js';
// import SupplierContainer from './inventory/SupplierContainer.js';

const MainContainer = () => {
  return (
    <Router>
    <>
    <NavBar/>
    <Switch>
      <Route path="/inventory" component={InventoryContainer}/>
    </Switch>
    </>
    </Router>
  )
}

export default MainContainer;

      {/*<Route path="/supplier" component={SupplierContainer}/>*/}
