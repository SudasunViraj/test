import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import orderbackground from '../images/orderbackground.jpg';

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  const [newOrder, setNewOrder] = useState({
    orderId: '',
    customerName: '',
    numOfItems: '',
    productId: '',
    orderPlacedDate: new Date(),
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  };

  const handleOrderPlacedDateChange = (date) => {
    setNewOrder({
      ...newOrder,
      orderPlacedDate: date,
    });
  };

  const handleAddOrder = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
  
      if (response.ok) {
        const savedOrder = await response.json();
  
        setData([...data, savedOrder]);
        handleCloseModal();
      } else {
        console.error('Failed to save the order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/orders');
        if (response.ok) {
          const orderData = await response.json();
          setData(orderData);
        } else {
          console.error('Failed to fetch order data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData(); 
  }, []);
  
  

  return (
    <div
      style={{
        paddingTop: '25px',
        backgroundImage: `url(${orderbackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'antiquewhite',
        height: '100vh',
        paddingLeft: '300px',
        paddingRight: '300px',
      }}
    >
      <h1>Orders</h1>
      <div style={{ marginBottom: '10px', textAlign: 'right' }}>
        <button className="btn btn-primary" onClick={handleShowModal}>
          Add Orders
        </button>
      </div>
      <table className="table table-striped" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">No. of Items</th>
            <th scope="col">Product ID</th>
            <th scope="col">Order Placed Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.orderId}>
              <td>{item.orderId}</td>
              <td>{item.customerName}</td>
              <td>{item.numOfItems}</td>
              <td>{item.productId}</td>
              <td>{item.orderPlacedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Order Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Order</Modal.Title>
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
                value={newOrder.orderId}
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
                value={newOrder.customerName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numOfItems">No. of Items</label>
              <input
                type="text"
                className="form-control"
                id="numOfItems"
                name="numOfItems"
                value={newOrder.numOfItems}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productId">Product ID</label>
              <input
                type="text"
                className="form-control"
                id="productId"
                name="productId"
                value={newOrder.productId}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="orderPlacedDate">Order Placed Date</label>
              <DatePicker
                className="form-control"
                selected={newOrder.orderPlacedDate}
                onChange={handleOrderPlacedDateChange}
                dateFormat="dd/MM/yyyy" // Customize the date format
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddOrder}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
