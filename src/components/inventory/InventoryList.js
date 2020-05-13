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
  
  const [search, setSearch] = useState('')

  const inventoryItems = useInventory();

  const filteredSearch = inventoryItems.filter(item => {
    return item.itemName.toLowerCase().includes(search.toLowerCase())
   })

  const renderedItems = filteredSearch.map((item, index) =>
   
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
    <>
    <input type="text" placeholder="Search Item Name" onChange={ e => setSearch(e.target.value)}/>
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
    </Table>
    <button><a href="/inventory/new">Add item</a></button>

    </>
  );
}

export default InventoryList;