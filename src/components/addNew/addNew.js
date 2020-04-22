import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from '../../firebase'

const AddNew = () => {
    const [itemName, setItemName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [purchaseDate, setPurchaseDate] = useState('')
    const [purchaseP, setPurchaseP] = useState('')
    const [expiryDate, setExpiryDate] = useState('')

    function onSubmit(e){
        e.preventDefault()

        firebase
        .firestore()
        .collection('inventory')
        .add({
            itemName,
            quantity,
            purchaseDate,
            purchaseP, 
            expiryDate
        })
        .then(() => {
            setItemName('')
            setQuantity('')
            setPurchaseDate('')
            setPurchaseP('')
            setExpiryDate('')
        })
    }

    return (
        <Form className="formControl" onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label> 
            <Form.Control type="text" placeholder="Enter Item Name" value={itemName} onChange={e=>setItemName(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Quantity of item" value={quantity} onChange={e=>setQuantity(e.currentTarget.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control type="number" placeholder="Price of item" value={purchaseP} onChange={e=>setPurchaseP(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Purchase Date</Form.Label>
            <Form.Control type="date" placeholder="Purchase of item" value={purchaseDate} onChange={e=>setPurchaseDate(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date" placeholder="EOD of item" value={expiryDate} onChange={e=>setExpiryDate(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Supplier Id</Form.Label>
            <Form.Control type="number" placeholder="Associated Supplier" />
        </Form.Group>

      
        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form>

    )
}



// function addNew(){
//     return(
//     <Form className="formControl">
//         <Form.Group controlId="formBasicEmail">
//             <Form.Label>Item Name</Form.Label> 
//             <Form.Control type="text" placeholder="Enter Item Name" />
//             <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Quantity</Form.Label>
//             <Form.Control type="number" placeholder="Quantity of item" />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Purchase Price</Form.Label>
//             <Form.Control type="number" placeholder="Price of item" />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Purchase Date</Form.Label>
//             <Form.Control type="date" placeholder="Purchase of item" />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Expiry Date</Form.Label>
//             <Form.Control type="date" placeholder="EOD of item" />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Supplier Id</Form.Label>
//             <Form.Control type="number" placeholder="Associated Supplier" />
//         </Form.Group>

      
//         <Button variant="primary" type="submit" >
//             Submit
//         </Button>
//     </Form>        
//     );
// }

export default AddNew;