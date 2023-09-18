import React, { useState, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../pages/supplier.css'; // Import your CSS file if you create a separate CSS file.

const Suppliers = () => {
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
    setSuppliers((prevSuppliers) => [
      ...prevSuppliers,
      {
        ...newSupplier,
        id: prevSuppliers.length + 1,
      },
    ]);
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
    <div className='page-yellow'>
      <div className='table-container'>
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
              {filteredSuppliers.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.address}</td>
                  <td>
                    {item.signUpChannel === 'Online' && (
                      <span style={{ backgroundColor: 'brown', borderRadius: '50px', padding: '5px', color: 'white' }}>
                        {item.signUpChannel}
                      </span>
                    )}
                    {item.signUpChannel === 'In-Store' && (
                      <span style={{ backgroundColor: 'brown', borderRadius: '50px', padding: '5px', color: 'white' }}>
                        {item.signUpChannel}
                      </span>
                    )}
                    {item.signUpChannel !== 'Online' && item.signUpChannel !== 'In-Store' && (
                      <span>{item.signUpChannel}</span>
                    )}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.registeredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Supplier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
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
                  <input
                    type="text"
                    className="form-control"
                    id="signUpChannel"
                    name="signUpChannel"
                    value={newSupplier.signUpChannel}
                    onChange={handleSupplierInputChange}
                  />
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
              <Button variant="primary" onClick={handleSaveSupplier}>
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
