import React from 'react';
import { Form, Button } from 'react-bootstrap';

function addNew(){
    return(
    <Form className="formControl">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label> 
            <Form.Control type="text" placeholder="Enter Item Name" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Quantity of item" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control type="number" placeholder="Price of item" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Purchase Date</Form.Label>
            <Form.Control type="date" placeholder="Purchase of item" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date" placeholder="EOD of item" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Supplier Id</Form.Label>
            <Form.Control type="number" placeholder="Associated Supplier" />
        </Form.Group>

      
        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form>        
    );
}

export default addNew;