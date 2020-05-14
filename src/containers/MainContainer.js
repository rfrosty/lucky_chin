import React from 'react';
import NavBar from '../NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryContainer from './inventory/InventoryContainer.js';
import SupplierContainer from './suppliers/SupplierContainer.js';
import LowContainer from './inventory/LowContainer.js';

import Buttons from '../buttons.js';

const MainContainer = () => {
  return (
    <Router>
    <>
    <NavBar/>
    {/* <Buttons /> */}
    <Switch>
      <Route path="/" exact component={Buttons}/>
      <Route path="/inventory" component={InventoryContainer}/>
      <Route path="/suppliers" component={SupplierContainer} />
      <Route path="/lowinvenotry" component={LowContainer} />

      
    </Switch>
    </>
    </Router>
  )
}

export default MainContainer;
