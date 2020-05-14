import React from 'react';
import {Card} from 'react-bootstrap';

const DashContainer = () => {
    return (
        <div className="container fluid">
            <div className="row">
                <div className="col-sm-4">
                <Card style={{ width: '18rem', height: '23rem' }}>
                <Card.Img variant="top" src={require('./dazzle.png')} style={{ width: '13rem', height: '13rem', marginTop: '0rem' }} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>11</Card.Title>
                <Card.Text>
                    Number of Items being tracked
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./dazzle.png')}  />
                <Card.Body>
                <Card.Title style={{ alignItems: 'center' }}>4</Card.Title>
                <Card.Text>
                    Items in LOW STOCK
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./dazzle.png')} />
                <Card.Body>
                <Card.Title style={{ alignItems: 'center' }}>11</Card.Title>
                <Card.Text>
                    Number of Items being tracked
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        {/* <div className="row">
            <h3>Key Contacts</h3> <br/>
            <p>Name - Contact Number</p><br/>
            <p>Name - Contact Number</p>
        </div> */}
      </div>

    )
}

export default DashContainer;