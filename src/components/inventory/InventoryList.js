import React from 'react';
import Item from './Item.js' //test if it works without dot.

const InventoryList = (props) => {

  const itemList = props.inventory.map((item => {
    return (
    <li key={item.id} className="list-item" >
      <Item info={item}/>
    </li>
    )
  }))

  return (
    <>
    <button><a href="/inventory/new">Add item</a></button>
    <ul>
      {itemList}
    </ul>
    </>
  )

}

export default InventoryList;
