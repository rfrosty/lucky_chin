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

  handleSubmit(event){
    event.preventDefault();
    let id = this.props.item.id;
    let selectedIndex = event.target.select.options.selectedIndex;

    let item = {
      "name": event.target.name.value,
      "quantity": event.target.quantity.value,
      "dateOfPurchase": event.target.dop.value,
      "expiryDate": event.target.ed.value,
      "purchasePrice": event.target.pp.value,
      "supplierID": this.state.suppliers[selectedIndex].id
    }
    console.log(id);
    console.log(item);
    return this.props.onUpdate(id, item);
  }

  render(){

    const supplierOptions = this.state.suppliers.map((item) => {
      return <option key={item.id} value={item.name}>{item.name}</option>
    });


    return(
      <>
      <form onSubmit={this.handleSubmit}> {/*why do the brackets need to be ommited here something about event becoming undefined.*/}

        <label for="name">Item Name:</label>
        <input type="text" name="name" id="name" defaultValue={this.props.item.name} />

        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" defaultValue={this.props.item.quantity} />

        <label for="dop">Date of Purchase:</label>
        <input type="text" name="dop" id="dop" defaultValue={this.props.item.dateOfPurchase} />

        <label for="ed">Expiry Date:</label>
        <input type="text" name="ed" id="ed" defaultValue={this.props.item.expiryDate} />

        <label for="pp">Purchased Price</label>
        <input type="number" name="pp" id="pp" step="0.01" min="0" defaultValue={this.props.item.purchasePrice} />

        <label for="supplier">Supplier:</label>
        <select id="select" name="select" id="supplier" defaultValue={this.findItemsSupplier()}>
        {supplierOptions}
        </select>

        <input type="submit" value="save" />
      </form>
      </>
    )
  }


}

export default ItemEditForm;
