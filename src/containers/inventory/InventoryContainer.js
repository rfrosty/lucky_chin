import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import InventoryList from '../../components/inventory/InventoryList.js';
// import Item from '../../components/suppliers/SupplierList.js';

class InventoryContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inventory: []
    }
  }

  render(){
    return(
      <p>I am the InventoryContainer.</p>
    )
  }

}

export default InventoryContainer;
