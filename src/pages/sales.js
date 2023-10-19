import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Sales = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      orderId: 'ORD123',
      orderDate: '2023-10-01',
      customerName: 'John Doe',
      paymentMethod: 'Credit Card',
      amount: '5000',
    },
    // ... (other data objects)
  ]);

  const [newSale, setNewSale] = useState({
    orderId: '',
    orderDate: '',
    customerName: '',
    paymentMethod: '',
    amount: '',
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSale({
      ...newSale,
      [name]: value,
    });
  };

  const handleAddSale = () => {
    fetch('/insert_sales.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSale),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setData([...data, newSale]); 
          setNewSale({ 
            salesId: '',
            orderId: '',
            orderDate: '',
            customerName: '',
            paymentMethod: '',
            amount: '',
          });
          handleCloseModal(); 
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // ...

  return (
    <div style={{ paddingTop: '25px', backgroundColor: 'antiquewhite', height: '100vh', paddingLeft: '300px', paddingRight: '300px' }}>
      <h1>Sales</h1>
      <div style={{ marginBottom: '10px', textAlign: 'right' }}>
        <button className="btn btn-primary" onClick={handleShowModal}>
          Add Sales
        </button>
      </div>
      <table className="table table-striped" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales ID</th>
            <th scope="col">Order ID</th>
            <th scope="col">Order Date</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.salesId}</td>
              <td>{item.orderId}</td>
              <td>{item.orderDate}</td>
              <td>{item.customerName}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Sales Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

          <div className="form-group">
              <label htmlFor="salesId">Sales ID</label>
              <input
                type="text"
                className="form-control"
                id="salesId"
                name="salesId"
                value={newSale.salesId}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="orderId">Order ID</label>
              <input
                type="text"
                className="form-control"
                id="orderId"
                name="orderId"
                value={newSale.orderId}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="orderDate">Order Date</label>
              <input
                type="date"
                className="form-control"
                id="orderDate"
                name="orderDate"
                value={newSale.orderDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                name="customerName"
                value={newSale.customerName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <input
                type="text"
                className="form-control"
                id="paymentMethod"
                name="paymentMethod"
                value={newSale.paymentMethod}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount (LKR)</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={newSale.amount}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddSale}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sales;
