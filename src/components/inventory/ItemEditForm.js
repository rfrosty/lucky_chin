import React,{useEffect,useState} from 'react';
import firebase from '../../firebase'
import {ToastContainer, toast, Zoom} from 'react-toastify';


const ItemEditForm = ({item}) => {

  const [dataItem,setDataItem] = useState(null);
  
  //data form
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('')
  const [purchaseP, setPurchaseP] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  const successToast = () => {
    toast("success, item has been edited", {
    className: "custom Toast",
    draggable: true,
    position: toast.POSITION.TOP_CENTER
  });
}

  const ref = firebase.firestore().collection('inventory').doc(item)
  useEffect(() =>{
      ref.get().then(function(doc) {
      if (doc.exists) {
        const data = doc.data();
        setDataItem(doc.data());
        setItemName(data.itemName);
        setQuantity(data.quantity)
        setPurchaseDate(data.purchaseDate)
        setPurchaseP(data.purchaseP)
        setExpiryDate(data.expiryDate)      
      } else {
          // doc.data() will be undefined in this case
      }
  })
  }, [])

  const submitEdit = (event) => {
      const result =  {quantity: quantity, expiryDate: expiryDate, itemName: itemName, purchaseDate: purchaseDate, purchaseP: purchaseP}
    ref.set(result).then(console.log('sucess upload'));
    event.preventDefault();
    successToast();
  }

    return(
      <>
      { dataItem ?

        <div style={{marginLeft: '10px'}}>
        <form onSubmit={(e) => submitEdit(e) } > {/*why do the brackets need to be ommited here something about event becoming undefined.*/}
        
        <label htmlFor="name">Item Name:</label>
        <input type="text" name="name" id="name" defaultValue={  dataItem.itemName} onChange={e=>setItemName(e.currentTarget.value)} />
        
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" min="0" defaultValue={  dataItem.quantity} onChange={e=>setQuantity(e.currentTarget.value)} />
        
        <label htmlFor="dop">Date of Purchase:</label>
        <input type="text" name="dop" id="dop" defaultValue={  dataItem.purchaseDate} onChange={e=>setPurchaseDate(e.currentTarget.value)} />
        
        <label htmlFor="ed">Expiry Date:</label>
        <input type="text" name="ed" id="ed" defaultValue={  dataItem.expiryDate} onChange={e=>setExpiryDate(e.currentTarget.value)} />
        
        <label htmlFor="pp">Purchased Price</label>
        <input type="number" name="pp" id="pp" step="0.01" min="0" defaultValue={  dataItem.purchaseP}  onChange={e=>setPurchaseP(e.currentTarget.value)} />
        
        {/* <label htmlFor="supplier">Supplier:</label> */}
        <input type="submit" value="save" />
        <button><a href="/inventory">Cancel</a></button>
        <button><a href="/">Go Home</a></button>
        </form>
         <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
         </div>
         : <h1>loading</h1>
      }
      </>
    )



}

export default ItemEditForm;
