import React from 'react';
import firebase from '../../firebase'


const ConfirmDelete = ({item}) => { //do variables need to be spelled CamelCase

  if (!item) {
    return <p>This item has doesn't exist or has already been deleted.</p>
  }

  let confirmDel = () => {
    document.getElementById("DeleteConfirmation").innerHTML = "This record has been deleted!";

  }

  let takeHomeAndDelete = () => {
    // return props.onDelete(props.item.id)
    console.log(item);
    firebase
    .firestore()
    .collection('inventory')
    .doc(item)
    .delete();
    
    // prompt("action completed")
    confirmDel();
  }

  return (
    <>
      <p>Are you sure you want to delete '{item.itemName}'?</p>
      <button onClick={takeHomeAndDelete}>Yes</button>
      <button><a href="/inventory">No</a></button>
      <p id="DeleteConfirmation"></p>
    </>
  )

}

export default ConfirmDelete;
