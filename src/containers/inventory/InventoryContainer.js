import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InventoryList from '../../components/inventory/InventoryList.js';
import ItemEditForm from '../../components/inventory/ItemEditForm.js';
import InventoryCreateForm from '../../components/inventory/InventoryCreateForm.js';
import ConfirmDelete from '../../components/inventory/ConfirmDelete.js';

import Request from '../../helpers/request.js'
// import Item from '../../components/suppliers/SupplierList.js';

 
const InventoryContainer = (props) => {

  const [inventory,setInventory] = useState(null)


      




  function findItemById(id){
    return inventory.find((item) => {
      return item.id === parseInt(id);
    });
  }

  function handleDelete(id){
    let inventoryState =  inventory;
    let itemIndex = inventoryState.findIndex((element) => {
      return element.id === id;
    });
    inventoryState.splice(itemIndex, 1);
      setInventory(inventoryState)
    // *FOR DB*
    // const request = new Request();
    // const url = '/pirates/' + id;
    // request.delete(url).then(() => {
    //   window.location = '/pirates';
    // });
  }

  function handlePost(payload){
    let inventoryState =  inventory;
    let newState = [...inventoryState, payload];
      setInventory(newState)
    // *FOR DB*
    // const request = new Request();
    // request.post('/pirates', pirate).then(() => {
    //   window.location = '/pirates'
    // })
  }

  function handleUpdate(id, item){
    //*FIND INDEX OF ITEM.
    let inventoryState =  inventory;
    let itemIndex = inventoryState.findIndex((element) => {
      return element.id === id;
    });
    // *CHANGE IT.
    inventoryState[itemIndex] = item;
      setInventory(inventoryState)
//---------------------------------------------------------------------------------------------//
// ARESKY: navigation component. global state management using redux.
// redirect tag.
//---------------------------------------------------------------------------------------------//
    // *FOR DB*
    // const request = new Request;
    // request.patch('/inventory/' + id, item).then(() => { //how a function works - not needing to return anything here.
    //   window.location = '/pirates/' + id
    // })
  }


    return(
      <Router>
      <>
      <h1>Inventory</h1>
      <Switch>

        <Route exact path = "/inventory/new" render={() => {
          return <InventoryCreateForm onFormSubmit={ handlePost} />
        }}/>

        <Route exact path="/inventory/:id/edit" render={(props) => {
        const id = props.match.params.id
        // const item = findItemById(id);
        return <ItemEditForm item={id}  />
        }}/>

        <Route exact path="/inventory/:id/delete" render={(props) =>{
        const id = props.match.params.id
        // const item =  findItemById(id);
        // return <ConfirmDelete item={item} onDelete={ handleDelete} />
        return <ConfirmDelete item={id}/>

        }}/>

        <Route render = {(props) => {
          return <InventoryList inventory={ inventory}/>
        }}/>

      </Switch>
      </>
      </Router>
    )
  

}

export default InventoryContainer;
