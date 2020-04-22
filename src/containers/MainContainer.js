import React from 'react';
import NavBar from '../NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryContainer from './inventory/InventoryContainer.js';
import ItemEditForm from '../components/inventory/ItemEditForm.js';
// import SupplierContainer from './inventory/SupplierContainer.js';

const MainContainer = () => {
  return (
    <Router>
    <>
    <NavBar/>
    <Switch>
      {/*}<Route path="/inventory/:id/edit" component={ItemEditForm}/> //most specific has to be at the top.
      If we wanted this and it were below 'inventory', it would've been happy with 'inventory' and just hit that.*/}
      <Route path="/inventory" component={InventoryContainer}/>
    </Switch>
    </>
    </Router>
  )
}

export default MainContainer;

      {/*<Route path="/supplier" component={SupplierContainer}/>*/}
