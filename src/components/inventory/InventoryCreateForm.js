import React, {Component} from 'react';
// import Request from '../../helpers/request.js'
import NeedSupplier from 'react';

class InventoryCreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      suppliers: []
    }
  }

  render() {

    if (this.state.suppliers.length === 0) {
      return <button><a href="/supplier/new">Please add a supplier first before adding an item. Click <strong>here.</strong></a></button>
    }

    return (
      <>
        <p>I am an ICF.</p>
      </>
    )
  }

}

export default InventoryCreateForm;

// <div>
//   <p>Please add a supplier first before adding an item.</p>
//   <button><a href="/suppliers/new">Add supplier</a></button>
// </div>

// <NeedSupplier/>
