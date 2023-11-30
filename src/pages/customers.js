import React, { useState, useMemo, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../pages/customers.css'; // You can create a customer-specific CSS file.
import axios from 'axios';
import customersBackground from '../images/customersbackground.jpg';

const Customers = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    'OrderID': '',
    'CustomerName': '',
    'PhoneNumber': '',
    'Address': '',
    'EMail': '',
    'CreatedDate': '',
  });
  const [customers, setCustomers] = useState([
    {
      id: 1,
      'OrderID': '1',
      'CustomerName': 'Customer 1',
      'PhoneNumber': '123-456-7890',
      'Address': '123 Main St, City',
      'EMail': 'customer1@example.com',
      'CreatedDate': '2023-09-10',
    },
    // Add more customer data here...
  ]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddCustomerClick = () => {
    setShowModal(true);
  };


  const formData = new URLSearchParams(newCustomer);
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCustomer = () => {
    setShowModal(false);
  
    // Make an HTTP POST request to your API endpoint to save the customer data
    axios.post('your-api-endpoint-url', {
      OrderID: newCustomer.OrderID,
      CustomerName: newCustomer.CustomerName,
      PhoneNumber: newCustomer.PhoneNumber,
      Address: newCustomer.Address,
      Email: newCustomer.EMail, 
      CreatedDate: newCustomer.CreatedDate,
    })
    
    .then(response => {
      // Handle the response if needed
      console.log('Customer data saved successfully:', response.data);
    })
    .catch(error => {
      // Handle errors if the request fails
      console.error('Error saving customer data:', error);
    });
  
    // Clear the newCustomer state
    setNewCustomer({
      OrderID: '',
      CustomerName: '',
      PhoneNumber: '',
      Address: '',
      EMail: '',
      CreatedDate: '',
    });
  };
      



  const [fetchedCustomers, setFetchedCustomers] = useState([]);

  // Function to fetch data from the backend
  const fetchDataFromBackend = () => {
    axios.get('your-fetch-data-api-endpoint')
      .then(response => {
        // Update the state with the fetched data
        setFetchedCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Fetch data when the component loads
    fetchDataFromBackend();
  }, []); 

  const handleCustomerInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  // Filter customers based on the selected date range using useMemo
  const filteredCustomers = useMemo(() => {
    if (startDate && endDate) {
      return customers.filter((customer) => {
        const customerDate = new Date(customer['Created Date']);
        const startFilterDate = new Date(startDate);
        const endFilterDate = new Date(endDate);
        return (
          customerDate >= startFilterDate && customerDate <= endFilterDate
        );
      });
    }
    return customers;
  }, [startDate, endDate, customers]);

  return (
    <div className="page-blue" style={{
      backgroundImage: `url(${customersBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      margin: 0,
      padding: 0,
      height: '100vh' /* Set the height to cover the entire viewport */
    }}>
      <div className="table-container">
        <h1 className="cust">Customers</h1>
        <div className="table-head-container">
          <div className="date-container">
            <div className="datee">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={handleAddCustomerClick}
            >
              Add Customer
            </button>
          </div>
        </div>
        <div>
          <table className="table table-striped mt-4">
            {/* Table Header with renamed columns */}
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Created Date</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {filteredCustomers.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item['CustomerName']}</td>
                  <td>{item['PhoneNumber']}</td>
                  <td>{item['Address']}</td>
                  <td>{item['EMail']}</td>
                  <td>{item['CreatedDate']}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form method="POST" action="backend/add_buyers.php">
                {/* Customer input fields with renamed labels */}
                <div className="mb-3">
                  <label htmlFor="OrderID" className="form-label">
                    Order ID:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="OrderID"
                    name="OrderID"
                    value={newCustomer['Order ID']}
                    onChange={handleCustomerInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Customer Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="CustomerName"
                    name="CustomerName"
                    value={newCustomer['Customer Name']}
                    onChange={handleCustomerInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="PhoneNumber" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    value={newCustomer['Phone Number']}
                    onChange={handleCustomerInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Address" className="form-label">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    name="Address"
                    value={newCustomer['Address']}
                    onChange={handleCustomerInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="EMail" className="form-label">
                    E-Mail:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="EMail"
                    name="EMail"
                    value={newCustomer['E-Mail']}
                    onChange={handleCustomerInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="createdDate" className="form-label">
                    Created Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="createdDate"
                    name="CreatedDate"
                    value={newCustomer['Created Date']}
                    onChange={handleCustomerInputChange}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveCustomer}>
                Save Customer
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Customers;
