import React from 'react';
import Item from './Item.js' //test if it works without dot.
import {Table} from 'react-bootstrap'

const InventoryList = (props) => {
  

  const itemList = props.inventory.map((item => {
    const id = item.id.toString();

  const editURL = "/inventory/" + id + "/edit";
  const deleteURL = "/inventory/" + id + "/delete";
    return (
    // <li key={item.id} className="list-item" >
    //   <Item info={item}/>
    // </li>

    <tr key={item.id} className="list-item">
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.dateOfPurchase}</td>
      <td>{item.expiryDate}</td>
      <td>{item.purchasePrice}</td>
      <td><button><a href={editURL}>Edit '{item.name}'</a></button></td>
      <td><button><a href={deleteURL}>Delete '{item.name}'</a></button></td>
    </tr>

    )
  }))

  return (
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Item Name</th>
      <th>Quantity</th>
      <th>Date of Purchase</th>
      <th>Expiry Date</th>
      <th>Purchase Price</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {itemList}
  </tbody>
</Table>

    <button><a href="/inventory/new">Add item</a></button>
    {/* <ul>
      {itemList}
    </ul> */}
    </>
  )

}

export default InventoryList;
