import React, {Component} from 'react';

class SupplierEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    // this.findItemsSupplier = this.findItemsSupplier.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // findItemsSupplier(){
  //   let supplier = this.state.suppliers.find((supplier) => {
  //     return supplier.id === this.props.item.supplierID;
  //   })
  //   return supplier.name;
  // }
  //
  // handleSubmit(event){
  //   event.preventDefault();
  //   let id = this.props.item.id;
  //   let selectedIndex = event.target.select.options.selectedIndex;
  //
  //   let item = {
  //     "name": event.target.name.value,
  //     "quantity": parseInt(event.target.quantity.value),
  //     "dateOfPurchase": event.target.dop.value,
  //     "expiryDate": event.target.ed.value,
  //     "purchasePrice": parseInt(event.target.pp.value),
  //     "supplierID": parseInt(this.state.suppliers[selectedIndex].id),
  //     "id": id
  //   }
  //   console.log("This is the selected item's id:", id);
  //   console.log("This is the item:", item);
  //   return this.props.onUpdate(id, item);
  // }

  render(){

    {/*
    // const supplierOptions = this.state.suppliers.map((item) => {
    //   return <option key={item.id} value={item.name}>{item.name}</option>
    // });
    */}

    return(
      <>
      <p>I am a supplier edit form.</p>
      {/*
      <form onSubmit={this.handleSubmit}> {/*why do the brackets need to be ommited here something about event becoming undefined.

        <label for="name">Item Name:</label>
        <input type="text" name="name" id="name" defaultValue={this.props.item.name} />

        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" min="0" defaultValue={this.props.item.quantity} />

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
      */}
      </>
    )
  }


}

export default SupplierEditForm;
