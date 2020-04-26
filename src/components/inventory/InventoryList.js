import React, {useState, useEffect } from 'react';
import {Table} from 'react-bootstrap'
import firebase from '../../firebase'

function useInventory(){
  const [invItems, setInvItems] = useState([])

  useEffect(() =>{
    const unsubscribe = firebase
    .firestore()
    .collection('inventory')
    .onSnapshot((snapshot) => {
      const newInvItems = snapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data()
      }))
      setInvItems(newInvItems)
    })
    return () => unsubscribe()
    
  }, [])
  return invItems;
}


const InventoryList = () => {
  

  // const id = item.id.toString();

  const inventoryItems = useInventory();
  const renderedItems = inventoryItems.map((item, index) =>
   
  <tr key={index} className="list-item">
  <td>{item.itemName}</td>
  <td>{item.quantity}</td>
  <td>{item.purchaseDate}</td>
  <td>{item.expiryDate}</td>
  <td>{item.purchaseP}</td>
  <td><button><a href={"/inventory/" + item.id + "/edit"}>Edit </a></button></td>
  <td><button><a href={"/inventory/" + item.id + "/delete"}>Delete</a></button></td>
</tr>
    //  const editURL = "/inventory/" + item.id + "/edit";
    //  const deleteURL = "/inventory/" + item.id + "/delete";
  
  )

  
  return(
    <Table striped bordered hover className="table1">
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
      {renderedItems}
      </tbody>
      <button><a href="/inventory/new">Add item</a></button>

    </Table>

  );
}

export default InventoryList;

// const InventoryList = (props) => {
  
//   const itemList = props.inventory.map((item => {
//     const id = item.id.toString();

//   const editURL = "/inventory/" + id + "/edit";
//   const deleteURL = "/inventory/" + id + "/delete";

  
//     return (
//     // <li key={item.id} className="list-item" >
//     //   <Item info={item}/>
//     // </li>

//     <tr key={item.id} className="list-item">
//       <td>{item.name}</td>
//       <td>{item.quantity}</td>
//       <td>{item.dateOfPurchase}</td>
//       <td>{item.expiryDate}</td>
//       <td>{item.purchasePrice}</td>
//       <td><button><a href={editURL}>Edit '{item.name}'</a></button></td>
//       <td><button><a href={deleteURL}>Delete '{item.name}'</a></button></td>
//     </tr>

//     )
//   }))

//   return (
//     <>
//     <Table striped bordered hover className="table1">
//   <thead>
//     <tr>
//       <th>Item Name</th>
//       <th>Quantity</th>
//       <th>Date of Purchase</th>
//       <th>Expiry Date</th>
//       <th>Purchase Price</th>
//       <th>Edit</th>
//       <th>Delete</th>
//     </tr>
//   </thead>
//   <tbody>
//   {itemList}
//   </tbody>
// </Table>

//     <button><a href="/inventory/new">Add item</a></button>
//     {/* <ul>
//       {itemList}
//     </ul> */}
//     </>
//   )

// }

