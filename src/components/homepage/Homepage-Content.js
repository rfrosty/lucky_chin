import React from 'react';
import { Button } from 'react-bootstrap';


function HomepageContent(){
    return(
//         <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>
<>
<div className="mb-2">
  <Button variant="primary" size="lg">
    Inventory
  </Button>{' '}{' '}
  <Button variant="secondary" size="lg">
   Suppliers
  </Button>{' '}
  <Button variant="primary" size="lg">
    Add New Suppliers
  </Button>{' '}
  <Button variant="secondary" size="lg">
    Add New Inventory
  </Button>{' '}
  <Button variant="primary" size="lg">
    Edit Inventory
  </Button>{' '}
  <Button variant="secondary" size="lg">
    Edit Suppliers
  </Button>
</div>
</>

    );

}

export default HomepageContent;