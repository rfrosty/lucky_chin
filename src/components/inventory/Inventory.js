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
      <th>Purchase Price/unit</th>
      <th>Purchase Date</th>
      <th>Expiry Date</th> 
      <th>Supplier Id</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Eggs</td>
      <td>54</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>

    </tr>
  </tbody>
</Table>
    );
}

export default Inventory;