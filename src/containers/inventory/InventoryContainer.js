import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryList from '../../components/inventory/InventoryList.js';
// import Item from '../../components/suppliers/SupplierList.js';

class InventoryContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inventory: [
        {"quantity": 5, "supplierID": 1, "name": "carrots", "date of purchase": "4/4/20", "expiry date": "4/5/20"},
        {"quantity": 7, "supplierID": 1, "name": "wraps", "date of purchase": "4/4/20", "expiry date": "4/5/20"},
        {"quantity": 2, "supplierID": 1, "name": "rice", "date of purchase": "4/4/20", "expiry date": "4/5/20"}
      ]
    }
  }

  render(){
    return(
      <Router>
      <>
      <Switch>
        <Route render = {(props) => {
          return <InventoryList ships={this.state.inventory}/>
        }}/>
      </Switch>
      </>
      </Router>
    )
  }

}

export default InventoryContainer;
