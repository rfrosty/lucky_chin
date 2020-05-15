import React from 'react';
import {Card} from 'react-bootstrap';
import ContactList from '../components/dash/ContactList';
import StockChart from '../components/dash/StockChart';


const DashContainer = () => {
    return (
        <div className="container fluid">
            <div className="row">
                <div className="col-sm-3">
                <Card style={{ width: '14rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./stock.png')} style={{ width: '8rem', height: '8rem', margin: 'auto'}} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>11</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Number of Items being tracked
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '14rem', height: '17rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./low.png')} style={{ width: '8rem', height: '8rem', margin: 'auto' }}  />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>4</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Items in LOW STOCK
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '14rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./item.png')} style={{ width: '8rem', height: '8rem', margin: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>11</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Number of Items being tracked
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '14rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./item.png')} style={{ width: '8rem', height: '8rem', margin: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>11</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Number of Items being tracked
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
           
            <div className="row" style={{marginTop: '30px'}}>
                <div className="col-sm-6 clist">
                <ContactList />
                </div>
                <div className="col-sm-6">
                <StockChart />
                </div>
            </div>
            
      </div>

    )
}

export default DashContainer;