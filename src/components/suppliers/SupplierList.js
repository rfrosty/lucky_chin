import React from 'react';
import Supplier from './Supplier';
import {Table} from 'react-bootstrap'


const SupplierList = (props) => {
  

  const supplierList = props.suppliers.map((supplier => {
    const id = supplier.id.toString();
    const editURL = "/suppliers/" + id + "/edit";
    const deleteURL = "/suppliers/" + id + "/delete";
    
    return (
    // <li key={supplier.id} className="list-item" >
    //   <Supplier info={supplier}/>
    // </li>

    <tr key={supplier.id}>
      <td>{supplier.name}</td>
      <td>{supplier.address}</td>
      <td>{supplier.telephoneNumber}</td>
      <td>{supplier.POC}</td>
      <td><button><a href={editURL}>Edit '{supplier.name}'</a></button></td>
      <td><button><a href={deleteURL}>Delete '{supplier.name}'</a></button></td>
    </tr>

    )
  }))

  return (
    <>
    <Table striped bordered hover className="table1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Contact Number</th>
      <th>P.O.C</th>
      <th>Edit</th>
      <th>Delete</th>
      
    </tr>
  </thead>
  <tbody>
   {supplierList}
  </tbody>
</Table>



    <button><a href="/suppliers/new">Add supplier</a></button>
    {/* <ul>
      {supplierList}
    </ul> */}
    </>
  )

}

export default SupplierList;
