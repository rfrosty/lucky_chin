import React from 'react';

const ConfirmDelete = (props) => { //do variables need to be spelled CamelCase❓

  if (!props.item) {
    return <p>This item has doesn't exist or has already been deleted.</p>
  }

  let takeHomeAndDelete = () => {
    return props.onDelete(props.item.id)
  }

  return (
    <>
      <p>Are you sure you want to delete '{props.item.name}'?</p>
      <button onClick={takeHomeAndDelete}>Yes</button>
      <button><a href="/inventory">No</a></button>
    </>
  )

}

export default ConfirmDelete;
