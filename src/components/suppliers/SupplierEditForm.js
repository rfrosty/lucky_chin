import React, { useState, useEffect} from 'react';
import firebase from '../../firebase'

const SupplierEditForm = ({supplier}) => {

  const [dataItem, setDataItem] = useState(null);

  const [name, setName] = useState('')
  const [POC, setPOC] = useState('')
  const [address, setAddress] = useState('')
  const [telephoneNumber, setTelephoneNumber] = useState('')


  const ref = firebase.firestore().collection('supplier').doc(supplier)
  useEffect(() => {
   ref.get().then(function(doc){
      if (doc.exists){
        const data = doc.data();
        setDataItem(doc.data());
        setAddress(data.address)
        setName(data.name);
        setPOC(data.poc)
        setTelephoneNumber(doc.telephoneNumber)

      }
      else {
          console.log('error')
      }
    })

  }, [])

  // let confirmDel = () => {
  //   document.getElementById("DeleteConfirmation").innerHTML = "This record has been deleted!";

  // }

  const submitEdit = (event) => {

    const result = {name: name, POC: POC, address: address, telephoneNumber: telephoneNumber}
    
    ref.set(result).then(console.log('sucess upload'));
    
    event.preventDefault();
    // confirmDel();
  }

  return(
    <>
    {dataItem ? 

    <form onSubmit={(e) => submitEdit(e) }>

    <label htmlFor="name">Name:</label>
    <input type="text" name="name" id="name" defaultValue={dataItem.name} onChange={e=>setName(e.currentTarget.value)}/>

    <label htmlFor="address">Address:</label>
    <input type="text" name="address" id="address" min="0" defaultValue={dataItem.address} onChange={e=>setAddress(e.currentTarget.value)} />

    <label htmlFor="telephoneNumber">Telephone Number:</label>
    <input type="number" name="telephoneNumber" id="telephoneNumber" defaultValue={dataItem.telephoneNumber} onChange={e=>setTelephoneNumber(e.currentTarget.value)} />

    <label htmlFor="POC">POC:</label>
    <input type="text" name="POC" id="POC" defaultValue={dataItem.POC} onChange={e=>setPOC(e.currentTarget.value)} />

    <input type="submit" value="save" />
    {/* <p id="DeleteConfirmation"></p> */}

  </form>

      : <h1>loading</h1>
    }
    </>
  )
}

export default SupplierEditForm;




// class SupplierEditForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event){
//     event.preventDefault();
//     let id = this.props.supplier.id;

//     let supplier = {
//       "name": event.target.name.value,
//       "address": parseInt(event.target.address.value),
//       "telephoneNumber": event.target.telephoneNumber.value,
//       "POC": event.target.POC.value,
//       "id": id
//     }
//     console.log("This is the selected supplier's id:", id);
//     console.log("This is the supplier:", supplier);
//     return this.props.onUpdate(id, supplier);
//   }

//   render(){

//     return(
//       <>
//       <form onSubmit={this.handleSubmit}>

//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" id="name" defaultValue={this.props.supplier.name} />

//         <label htmlFor="address">Address:</label>
//         <input type="text" name="address" id="address" min="0" defaultValue={this.props.supplier.address} />

//         <label htmlFor="telephoneNumber">Telephone Number:</label>
//         <input type="text" name="telephoneNumber" id="telephoneNumber" defaultValue={this.props.supplier.telephoneNumber} />

//         <label htmlFor="POC">POC:</label>
//         <input type="text" name="POC" id="POC" defaultValue={this.props.supplier.POC} />

//         <input type="submit" value="save" />
//       </form>
//       </>
//     )
//   }

// }


