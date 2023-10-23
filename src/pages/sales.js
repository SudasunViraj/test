import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'
import backgroundImage from '../images/salesbackground.jpg'; // Replace with the path to your image

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
      .then((response) => {
        if (response.success) {
          // Append the newly added sale to the data array
          setData([...data, response.sale]);
          setNewSale({
            orderId: '',
            orderDate: '',
            customerName: '',
            paymentMethod: '',
            amount: '',
          });
          handleCloseModal();
        } else {
          console.error(response.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Fetch sales data from the database and update the state
    fetch('/get_sales.php')
      .then((response) => response.json())
      .then((salesData) => {
        setData(salesData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount


  // ...

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      paddingTop: '25px',
      backgroundColor: 'antiquewhite',
      height: '100vh',
      paddingLeft: '300px',
      paddingRight: '300px'
    }}>

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
              <select
                className="form-control"
                id="paymentMethod"
                name="paymentMethod"
                value={newSale.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="">Select Payment Method</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
              </select>
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
