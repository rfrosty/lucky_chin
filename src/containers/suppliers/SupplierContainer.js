import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
      <p>I am a suppliercontainer.</p>
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
