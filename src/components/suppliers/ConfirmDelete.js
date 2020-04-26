import React from 'react';
import firebase from '../../firebase'

const ConfirmDelete = ({supplier}) => {

  if (!supplier) {
    return <p>This supplier doesn't exist or has already been deleted.</p>
  }

  let confirmDel = () => {
    document.getElementById("DeleteConfirmation").innerHTML = "This record has been deleted!";

  }
  let takeHomeAndDelete = () => {
    console.log(supplier);

    firebase
    .firestore()
    .collection('supplier')
    .doc(supplier)
    .delete();
    
    // prompt("action completed")
    confirmDel();
  }

  return (
    <>
      <p>Are you sure you want to delete '{supplier.name}'?</p>
      <button onClick={takeHomeAndDelete}>Yes</button>
      <button><a href="/suppliers">No</a></button>
      <p id="DeleteConfirmation"></p>
    </>
  )

}

export default ConfirmDelete;
