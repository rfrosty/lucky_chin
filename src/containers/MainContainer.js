import React from 'react';
import NavBar from '../NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryContainer from './inventory/InventoryContainer.js';
import SupplierContainer from './suppliers/SupplierContainer.js';

const MainContainer = () => {
  return (
    <Router>
    <>
    <NavBar/>
    <Switch>
      <Route path="/inventory" component={InventoryContainer}/>
      <Route path="/suppliers" component={SupplierContainer} />
    </Switch>
    </>
    </Router>
  )
}

export default MainContainer;
