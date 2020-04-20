import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryList from '../../components/inventory/InventoryList.js';
import ItemEditForm from '../../components/inventory/ItemEditForm.js';
// import Item from '../../components/suppliers/SupplierList.js';

class InventoryContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inventory: [
        {"id": 1, "quantity": 5, "supplierID": 1, "name": "carrots", "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20"},
        {"id": 2,"quantity": 7, "supplierID": 1, "name": "wraps", "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20"},
        {"id": 3,"quantity": 2, "supplierID": 1, "name": "rice", "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20"}
      ]
    }
  }

  render(){
    return(
      <Router>
      <>
      <Switch>

        {/*}<Route exact path="/inventory/:id/edit" component={ItemEditForm}/>*/}

        <Route exact path="/inventory/:id/edit" render={(props) => {
        return <ItemEditForm inventory={this.state.inventory}/>
        }}/>

        <Route render = {(props) => {
          return <InventoryList inventory={this.state.inventory}/>
        }}/>

      </Switch>
      </>
      </Router>
    )
  }

}

export default InventoryContainer;
