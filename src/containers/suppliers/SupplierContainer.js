import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SupplierList from '../../components/suppliers/SupplierList.js';
import SupplierEditForm from '../../components/suppliers/SupplierEditForm.js';

class SupplierContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      suppliers: [
        {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
        {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
        {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
      ]
    }
    this.findItemById = this.findItemById.bind(this);
  }

  findItemById(id){
    return this.state.suppliers.find((item) => {
      return item.id === parseInt(id);
    });
  }

  handleUpdate(id, payload){
    //*FIND INDEX OF ITEM.
    let suppliersState = this.state.suppliers;
    let itemIndex = suppliersState.findIndex((element) => {
      return element.id === id;
    });
    // *CHANGE IT.
    suppliersState[itemIndex] = payload;
    this.setState({suppliers: suppliersState})
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

  render(){
    return(
      <Router>
      <>
      <h1>Suppliers</h1>
      <Switch>

        {/*
        <Route exact path = "/inventory/new" render={() => {
          return <InventoryCreateForm onFormSubmit={this.handlePost} />
        }}/>
        */}

        <Route exact path="/suppliers/:id/edit" render={(props) => {
        const id = props.match.params.id
        const supplier = this.findItemById(id);
        return <SupplierEditForm item={supplier} onUpdate={this.handleUpdate} />
        }}/>

        {/*
        <Route exact path="/inventory/:id/delete" render={(props) =>{
        const id = props.match.params.id
        const item = this.findItemById(id);
        return <ConfirmDelete item={item} onDelete={this.handleDelete} />
        }}/>
        */}

        <Route render = {(props) => {
          return <SupplierList suppliers={this.state.suppliers}/>
        }}/>

      </Switch>
      </>
      </Router>
    )
  }

}

export default SupplierContainer;


































// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// // import SupplierList from '../../suppliers/SupplierList';
// // import Supplier from '../..suppliers/Supplier';
//
// class SupplierContainer extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       suppliers: [
//         {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
//         {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
//         {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
//       ]
//     }
//   }
//
//
//
//
//
//
//   render() {
//     return (
//       <p>supplier container.</p>
//     )
//   }
// }
//
// export default SupplierContainer;
