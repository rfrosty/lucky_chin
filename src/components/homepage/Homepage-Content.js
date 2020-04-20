import React from 'react';
import { Button } from 'react-bootstrap';



function HomepageContent(){
    return(

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