import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import firebase from '../../firebase'

function useInventory(){
  const [invItems, setInvItems] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
    .firestore()
    .collection('inventory')
    .onSnapshot((snapshot) => {
      const newInvItems = snapshot.docs.map((doc) =>({
        id:doc.id,
        ...doc.data()
      }))
      setInvItems(newInvItems)
    })
    return () => unsubscribe()
  }, [])
  return invItems;
}


const Inventory = () => {
  const inventoryItems = useInventory();
  const renderedItems = inventoryItems.map((item,index) => 
    <tr key={index}>
    <td>{index}</td>
    <td>{item.itemName}</td> 
    <td>{item.quantity}</td>
    <td>{item.purchaseP}</td>
    <td>{item.purchaseDate}</td>
    <td>{item.expiryDate}</td>
    <td>--</td>
    <td><button>Edit</button></td>
    </tr>
    )
  
    return(
      <div>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Quantity</th>
      <th>Purchase Price/unit</th>
      <th>Purchase Date</th>
      <th>Expiry Date</th> 
      <th>Supplier Id</th>
      <th>Edit/Delete</th> 
    </tr>
  </thead>
  <tbody>
      {renderedItems}
  </tbody>
</Table>
</div>
      
    );
}

export default Inventory;