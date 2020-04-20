import React from 'react';
import { Table } from 'react-bootstrap';

function Inventory(){
    return(
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Quantity</th>
      <th>Purchase Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    );
}

export default Inventory;