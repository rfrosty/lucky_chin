import React, {Component} from 'react';

class ItemEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: [],
      suppliers: [
        {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
        {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
        {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
      ]
    }
    this.findItemsSupplier = this.findItemsSupplier.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  findItemsSupplier(){
    let supplier = this.state.suppliers.find((supplier) => {
      return supplier.id === this.props.item.supplierID;
    })
    return supplier.name;
  }

  // handleSubmit(){
  //
  //   let id = this.props.item.id;
  //   let
  //
  //   return this.props.update(id, item)
  // }

  render(){

    const supplierOptions = this.state.suppliers.map((item) => {
      return <option key={item.id} value={item.name}>{item.name}</option>
    });


    return(
      <>
      <form onSubmit={this.handleSubmit()}>
        <input type="text" name="name" defaultValue={this.props.item.name} />

        <input type="number" name="quantity" defaultValue={this.props.item.quantity} />

        <input type="text" name="dop" defaultValue={this.props.item.dateOfPurchase} />

        <input type="text" name="ed" defaultValue={this.props.item.expiryDate} />

        <select id="select" name="select" defaultValue={this.findItemsSupplier()}>
        {supplierOptions}
        </select>

        <input type="submit" value="save" />
      </form>
      </>
    )
  }


}

export default ItemEditForm;
