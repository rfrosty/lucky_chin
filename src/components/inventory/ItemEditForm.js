import React, {Component} from 'react';

class ItemEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: []
    }
  }

  render(){
    return(
      <>
      <p>I am an item edit form</p>
      {/*<form>
        <input type="text" name="name" defaultValue={this.props.inventory[0].name} />
      </form>*/}
      </>
    )
  }


}

export default ItemEditForm;
