import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Sales = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      orderId: 'ORD123',
      orderDate: '2023-10-01',
      channel: 'Online',
      orderType: 'Standard',
      paymentMethod: 'Credit Card',
      amount: '5000',
    },
    {
      id: 2,
      orderId: 'ORD124',
      orderDate: '2023-10-02',
      channel: 'In-Store',
      orderType: 'Express',
      paymentMethod: 'Cash',
      amount: '3500',
    },
    {
      id: 3,
      orderId: 'ORD125',
      orderDate: '2023-10-03',
      channel: 'Phone',
      orderType: 'Standard',
      paymentMethod: 'PayPal',
      amount: '6000',
    },
  ]);

  const [newSale, setNewSale] = useState({
    orderId: '',
    orderDate: '',
    channel: '',
    orderType: '',
    paymentMethod: '',
    amount: '',
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSale({
      ...newSale,
      [name]: value,
    });
  };

  const handleAddSale = () => {
    const newId = data.length + 1;
    const newSaleData = {
      id: newId,
      ...newSale,
    };
    setData([...data, newSaleData]);
    handleCloseModal();
  };

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
            <th scope="col">ORDER ID</th>
            <th scope="col">ORDER DATE</th>
            <th scope="col">CHANNEL</th>
            <th scope="col">ORDER TYPE</th>
            <th scope="col">PAYMENT METHOD</th>
            <th scope="col">AMOUNT(LKR)</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.orderId}</td>
              <td>{item.orderDate}</td>
              <td>{item.channel}</td>
              <td>{item.orderType}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.amount}</td>
              <td>
                {/* Add actions buttons or components here */}
              </td>
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
              <label htmlFor="channel">Channel</label>
              <input
                type="text"
                className="form-control"
                id="channel"
                name="channel"
                value={newSale.channel}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="orderType">Order Type</label>
              <input
                type="text"
                className="form-control"
                id="orderType"
                name="orderType"
                value={newSale.orderType}
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
