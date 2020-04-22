import React from 'react';
// import Item from './Item.js' //test if it works without dot.

const SupplierList = (props) => {

  // const supplierList = props.suppliers.map((supplier => {
  //   return (
  //   <li key={supplier.id} className="list-item" >
  //     <Item info={supplier}/>
  //   </li>
  //   )
  // }))

  return (
    <>
    <button><a href="/supplier/new">Add supplier</a></button>
    {/*
    <ul>
      {itemList}
    </ul>
    */}
    </>
  )

}

export default SupplierList;
