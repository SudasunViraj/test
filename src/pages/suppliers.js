import React, { useState, useMemo, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../pages/supplier.css';
import axios from 'axios';
import suppliersbackground from '../images/suppliersbackground.jpg';
import '../css/sup.css'


const Suppliers = () => {

  const containerStyle = {
    backgroundImage: `url(${suppliersbackground})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    signUpChannel: '',
    email: '',
    registeredDate: '',
  });
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: 'Mark Otto',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City',
      signUpChannel: 'Online',
      email: 'mark@example.com',
      registeredDate: '2023-09-10',
    },

    {
      id: 1,
      name: 'Mark Otto',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City',
      signUpChannel: 'Online',
      email: 'mark@example.com',
      registeredDate: '2023-09-10',
    },
    {
      id: 2,
      name: 'Jacob Thornton',
      phoneNumber: '987-654-3210',
      address: '456 Elm St, Town',
      signUpChannel: 'In-Store',
      email: 'jacob@example.com',
      registeredDate: '2023-09-12',
    },
    {
      id: 3,
      name: 'Larry the Bird',
      phoneNumber: '555-123-4567',
      address: '789 Oak St, Village',
      signUpChannel: 'Online',
      email: 'larry@example.com',
      registeredDate: '2023-09-15',
    },
    {
      id: 4,
      name: 'John Doe',
      phoneNumber: '222-333-4444',
      address: '456 Pine St, Town',
      signUpChannel: 'In-Store',
      email: 'john@example.com',
      registeredDate: '2023-09-18',
    },
    {
      id: 5,
      name: 'Jane Smith',
      phoneNumber: '777-888-9999',
      address: '789 Maple St, Village',
      signUpChannel: 'Online',
      email: 'jane@example.com',
      registeredDate: '2023-09-20',
    },
    {
      id: 6,
      name: 'Alice Johnson',
      phoneNumber: '111-222-3333',
      address: '101 Oak St, Town',
      signUpChannel: 'Online',
      email: 'alice@example.com',
      registeredDate: '2023-09-22',
    },
    // Add more supplier data here...
  ]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddSupplierClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveSupplier = () => {
    setShowModal(false);

    // Send a POST request to your backend to add the new supplier
    axios.post('/api/add_supplier', newSupplier)
      .then(response => {
        // Handle the response if needed
        console.log('Supplier added successfully:', response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error adding supplier:', error);
      });

    // Clear the newSupplier state
    setNewSupplier({
      name: '',
      phoneNumber: '',
      address: '',
      signUpChannel: '',
      email: '',
      registeredDate: '',
    });
  };


  const handleSupplierInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier((prevSupplier) => ({
      ...prevSupplier,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Fetch supplier data from the server when the component mounts
    fetchSuppliers();
  }, []); // The empty dependency array ensures this effect runs once on component mount

  const fetchSuppliers = () => {
    // Make an HTTP GET request to fetch supplier data
    axios.get('backend/get_supplier.php')
      .then((response) => {
        // Update the suppliers state with the received data
        setSuppliers(response.data);
      })
      .catch((error) => {
        // Handle any errors, e.g., show an error message
        console.error(error);
      });
  };

  // Filter suppliers based on the selected date range using useMemo
  const filteredSuppliers = useMemo(() => {
    if (startDate && endDate) {
      return suppliers.filter((supplier) => {
        const supplierDate = new Date(supplier.registeredDate);
        const startFilterDate = new Date(startDate);
        const endFilterDate = new Date(endDate);
        return (
          supplierDate >= startFilterDate && supplierDate <= endFilterDate
        );
      });
    }
    return suppliers;
  }, [startDate, endDate, suppliers]);

  return (
    <div className='page-yellow-new'>
      <div className='table-container-sup'>
        <h1 className='supp'>Suppliers</h1>
        <div className='table-head-container'>
          <div className='date-container'>
            <div className='datee'>
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
              onClick={handleAddSupplierClick}
            >
              Add Supplier
            </button>
          </div>
        </div>
        <div>
          <table className="table table-striped mt-4">
            {/* Table Header */}
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">NAME</th>
                <th scope="col">PHONE NUMBER</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">SIGN UP CHANNEL</th>
                <th scope="col">EMAIL</th>
                <th scope="col">REGISTERED DATE</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{supplier.name}</td>
                  <td>{supplier.phoneNumber}</td>
                  <td>{supplier.address}</td>
                  <td>
                    {supplier.signUpChannel === 'Online' && (
                      <span style={{ backgroundColor: 'brown', borderRadius: '50px', padding: '5px', color: 'white' }}>
                        {supplier.signUpChannel}
                      </span>
                    )}
                    {supplier.signUpChannel === 'In-Store' && (
                      <span style={{ backgroundColor: 'brown', borderRadius: '50px', padding: '5px', color: 'white' }}>
                        {supplier.signUpChannel}
                      </span>
                    )}
                    {supplier.signUpChannel !== 'Online' && supplier.signUpChannel !== 'In-Store' && (
                      <span>{supplier.signUpChannel}</span>
                    )}
                  </td>
                  <td>{supplier.email}</td>
                  <td>{supplier.registeredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Supplier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form method='POST' action='backend/add_supplier.php'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={newSupplier.name}
                    onChange={handleSupplierInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={newSupplier.phoneNumber}
                    onChange={handleSupplierInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={newSupplier.address}
                    onChange={handleSupplierInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signUpChannel" className="form-label">Sign Up Channel:</label>
                  <select
                    name="signUpChannel"
                    id="signUpChannel"
                    className="form-control"
                    onChange={handleSupplierInputChange}
                    value={newSupplier.signUpChannel}
                  >
                    <option value="">Select an option</option>
                    <option value="Online">Online</option>
                    <option value="In-Store">In-Store</option>
                  </select>

                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={newSupplier.email}
                    onChange={handleSupplierInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="registeredDate" className="form-label">Registered Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="registeredDate"
                    name="registeredDate"
                    value={newSupplier.registeredDate}
                    onChange={handleSupplierInputChange}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button type='submit' variant="primary" onClick={handleSaveSupplier}>
                Save Supplier
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
