import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class HomepageContent extends Component {
  
 
 
 
 




  render(){
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
        <div>
          <form>
          <input  type="text" id="inputText" placeholder="name"/>
          <input type="text" id="ageText" placeholder="age"/>
          <button >Submit</button>
          </form>
        </div>
    </div>
    </> 
    );
  }
}


export default HomepageContent;