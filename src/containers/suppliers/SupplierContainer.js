import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SupplierList from '../../components/suppliers/SupplierList.js';

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

        <Route exact path="/inventory/:id/edit" render={(props) => {
        const id = props.match.params.id
        const item = this.findItemById(id);
        return <ItemEditForm item={item} onUpdate={this.handleUpdate} />
        }}/>

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
