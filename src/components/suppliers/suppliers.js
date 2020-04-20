import React from 'react';
import { Table } from 'react-bootstrap';

function Suppliers(){
    return(
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Contact No.</th>
      <th>Address</th>
      <th>P.O.C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>FishMan</td>
      <td>01313171044</td>
      <td>123 belhaven street</td>
      <td>Steven Miller</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Meat Guy</td>
      <td>01315567890</td>
      <td>24 Drumbrae Place</td>
      <td>Kinston the G-man</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Fresh Veg</td>
      <td>01315567890</td>
      <td>19 Foxmore Street</td>
      <td>Emily Davidson</td>
    </tr>
  </tbody>
</Table>
    );
}

export default Suppliers;