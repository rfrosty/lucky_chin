import React, { useState} from 'react';
import firebase from '../../firebase'
import {ToastContainer, toast, Zoom} from 'react-toastify';

const SupplierCreateForm = () => {
  const [name, setName] = useState('')
  const [POC, setPOC] = useState('')
  const [address, setAddress] = useState('')
  const [telephoneNumber, setTelephoneNumber] = useState('')

  const successToast = () => {
      toast("success, Supplier has been Added", {
      className: "custom Toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
  }

  function onSubmit(event){
    event.preventDefault()
    successToast();

  firebase
    .firestore()
    .collection('supplier')
    .add({
      name,
      address,
      telephoneNumber, 
      POC
    })
    .then(() => {
      setAddress('')
      setName('')
      setPOC('')
      setTelephoneNumber('')
  })
}

return (
  <div style={{marginLeft:'20px'}}>
    <form onSubmit={onSubmit}>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={e=>setName(e.currentTarget.value)}/>
      <label for="address">Address:</label>
      <input type="text" name="address" id="address" min="0" value={address} onChange={e=>setAddress(e.currentTarget.value)} />
      <label for="telephoneNumber">Telephone Number:</label>
      <input type="text" name="telephoneNumber" id="telephoneNumber" value={telephoneNumber} onChange={e=>setTelephoneNumber(e.currentTarget.value)} />
      <label for="POC">POC:</label>
      <input type="text" name="POC" id="POC" value={POC} onChange={e=>setPOC(e.currentTarget.value)} />
      <input type="submit" value="save" />
      <button><a href="/inventory">Cancel</a></button>
      <button><a href="/">Home</a></button>
    </form>
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
      </div>

)






}

// class SupplierCreateForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event){
//     event.preventDefault();

//     let supplier = {
//       "name": event.target.name.value,
//       "address": parseInt(event.target.address.value),
//       "telephoneNumber": event.target.telephoneNumber.value,
//       "POC": event.target.POC.value,
//       "id": Math.random()
//     }
//     return this.props.onFormSubmit(supplier);
//   }

//   render(){

//     return(
//       <>
//       <form onSubmit={this.handleSubmit}>

//         <label for="name">Name:</label>
//         <input type="text" name="name" id="name" />

//         <label for="address">Address:</label>
//         <input type="text" name="address" id="address" min="0" />

//         <label for="telephoneNumber">Telephone Number:</label>
//         <input type="text" name="telephoneNumber" id="telephoneNumber" />

//         <label for="POC">POC:</label>
//         <input type="text" name="POC" id="POC" />

//         <input type="submit" value="save" />
//       </form>
//       </>
//     )
//   }

// }

export default SupplierCreateForm;
