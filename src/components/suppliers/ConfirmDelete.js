import React from 'react';

const ConfirmDelete = (props) => {

  if (!props.supplier) {
    return <p>This supplier doesn't exist or has already been deleted.</p>
  }

  let takeHomeAndDelete = () => {
    return props.onDelete(props.supplier.id)
  }

  return (
    <>
      <p>Are you sure you want to delete '{props.supplier.name}'?</p>
      <button onClick={takeHomeAndDelete}>Yes</button>
      <button><a href="/suppliers">No</a></button>
    </>
  )

}

export default ConfirmDelete;
