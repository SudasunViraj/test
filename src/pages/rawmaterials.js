import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RawMaterial = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      rawMaterialId: 'RM001',
      supplierName: 'Supplier A',
      type: 'Type A',
      weight: '100 kg',
      productCategory: 'Black Tea',
    },
    // Add more raw material data here...
  ]);

  const productCategories = ["Black Tea", "Green Tea", "Herbal Tea", "Others"];

  const [newRawMaterial, setNewRawMaterial] = useState({
    rawMaterialId: '',
    supplierName: '',
    type: '',
    weight: '',
    productCategory: 'Black Tea', // Set the default value
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRawMaterial({
      ...newRawMaterial,
      [name]: value,
    });
  };

  const handleAddRawMaterial = () => {
    // Add your code to save the new raw material data, similar to your example
  };

  // Fetch raw material data when the component mounts
  useEffect(() => {
    // Add your code to fetch raw material data, similar to your example
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ paddingTop: '25px', backgroundColor: 'antiquewhite', height: '100vh', paddingLeft: '300px', paddingRight: '300px' }}>
      <h1>Raw Material Details</h1>
      <div style={{ marginBottom: '10px', textAlign: 'right' }}>
        <button className="btn btn-primary" onClick={handleShowModal}>
          Add Raw Materials
        </button>
      </div>
      <table className="table table-striped" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Raw Material ID</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Type</th>
            <th scope="col">Weight</th>
            <th scope="col">Product Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.rawMaterialId}</td>
              <td>{item.supplierName}</td>
              <td>{item.type}</td>
              <td>{item.weight}</td>
              <td>{item.productCategory}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Raw Material Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Raw Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="rawMaterialId">Raw Material ID</label>
              <input
                type="text"
                className="form-control"
                id="rawMaterialId"
                name="rawMaterialId"
                value={newRawMaterial.rawMaterialId}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                id="supplierName"
                name="supplierName"
                value={newRawMaterial.supplierName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={newRawMaterial.type}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                value={newRawMaterial.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productCategory">Product Category</label>
              <select
                className="form-control"
                id="productCategory"
                name="productCategory"
                value={newRawMaterial.productCategory}
                onChange={handleInputChange}
              >
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddRawMaterial}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RawMaterial;
