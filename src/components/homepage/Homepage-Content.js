import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import fire from '../../fire';

class HomepageContent extends Component {
  state = {
    text: ""
  }
  handleText = e => {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = (e) => {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.text);
    this.setState({
      text: ""
    })
  }

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
          <input onChange={this.handleText} type="text" id="inputText"/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>


    </div>
    </> 
    );
  }
}


export default HomepageContent;