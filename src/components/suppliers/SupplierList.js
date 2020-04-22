import React from 'react';
import Supplier from './Supplier';

const SupplierList = (props) => {

  const supplierList = props.suppliers.map((supplier => {
    return (
    <li key={supplier.id} className="list-item" >
      <Supplier info={supplier}/>
    </li>
    )
  }))

  return (
    <>
    <button><a href="/supplier/new">Add supplier</a></button>
    <ul>
      {supplierList}
    </ul>
    </>
  )

}

export default SupplierList;
