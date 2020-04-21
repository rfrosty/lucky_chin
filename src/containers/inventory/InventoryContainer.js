import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryList from '../../components/inventory/InventoryList.js';
import ItemEditForm from '../../components/inventory/ItemEditForm.js';
import InventoryCreateForm from '../../components/inventory/InventoryCreateForm.js';
import ConfirmDelete from '../../components/inventory/ConfirmDelete.js';

import Request from '../../helpers/request.js'
// import Item from '../../components/suppliers/SupplierList.js';

class InventoryContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inventory: [
        {"name": "carrots", "quantity": 5, "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20", "purchasePrice": 20.05, "supplierID": 2, "id": 1},
        {"name": "wraps", "quantity": 7, "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20", "purchasePrice": 8.70, "supplierID": 1, "id": 2},
        {"name": "rice", "quantity": 2, "dateOfPurchase": "4/4/20", "expiryDate": "4/5/20", "purchasePrice": 12.60, "supplierID": 1, "id": 3}
      ]
    }
    this.findItemById = this.findItemById.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  findItemById(id){
    return this.state.inventory.find((item) => {
      return item.id === parseInt(id);
    });
  }

  handleDelete(payload){
    console.log(payload);
    return 5
  }

  handlePost(payload){
    let inventoryState = this.state.inventory;
    let newState = [...inventoryState, payload];
    this.setState({inventory: newState})
  }

  handleUpdate(id, item){ //does method have to return anything❓
    //*FIND INDEX OF ITEM.
    // *CHANGE IT.
    let inventoryState = this.state.inventory;
    let itemIndex = inventoryState.findIndex((element) => {
      return element.id === id;
    });
    inventoryState[itemIndex] = item;
    // console.log("This is itemIndex:", itemIndex);
    // console.log("This is the newState:", inventoryState);
    this.setState({inventory: inventoryState})
    // window.location = '/inventory';
//---------------------------------------------------------------------------------------------//
// ARESKY: navigation component. global state management using redux.
// redirect tag.
//---------------------------------------------------------------------------------------------//
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

        <Route exact path = "/inventory/new" render={() => {
          return <InventoryCreateForm onFormSubmit={this.handlePost} />
        }}/>

        <Route exact path="/inventory/:id/edit" render={(props) => {
        const id = props.match.params.id
        const item = this.findItemById(id);
        return <ItemEditForm item={item} onUpdate={this.handleUpdate} />
        }}/>

        <Route exact path="/inventory/:id/delete" render={(props) =>{
        const id = props.match.params.id
        const item = this.findItemById(id)
        return <ConfirmDelete item={item} onDelete={this.handleDelete} />
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
