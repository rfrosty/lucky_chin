import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryList from '../../components/inventory/InventoryList.js';
import ItemEditForm from '../../components/inventory/ItemEditForm.js';

import Request from '../../helpers/request.js'
// import Item from '../../components/suppliers/SupplierList.js';

class InventoryContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inventory: [
        {"id": 1, "quantity": 5, "supplierID": 2, "name": "carrots", "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20", "purchasePrice": 20.05},
        {"id": 2,"quantity": 7, "supplierID": 1, "name": "wraps", "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20", "purchasePrice": 8.70},
        {"id": 3,"quantity": 2, "supplierID": 1, "name": "rice", "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20", "purchasePrice": 12.60}
      ]
    }
  }

  findItemById(id){
    return this.state.inventory.find((item) => {
      return item.id === parseInt(id);
    });
  }

  handleUpdate(id, item){


    // const request = new Request;
    // request.patch('/inventory/' + id, item).then(() => { //how a function works - not needing to return anything here.
    //   window.location = '/pirates/' + id
    // })
  }

  render(){
    return(
      <Router>
      <>
      <h1>Inventory</h1>
      <Switch>

        <Route exact path="/inventory/:id/edit" render={(props) => {
        const id = props.match.params.id
        const item = this.findItemById(id);
        return <ItemEditForm item={item} update={this.handleUpdate()} />
        }}/>

        {/*}<Route exact path="/pirates/:id/edit" render={(props) =>{
        const id = props.match.params.id
        const pirate = this.findPirateById(id);
        return <PirateEditForm pirate={pirate} onUpdate={this.handleUpdate}/>
      }}/>*/}

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
