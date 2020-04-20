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
    <ul>
      {itemList}
    </ul>
  )

}

export default InventoryList;
