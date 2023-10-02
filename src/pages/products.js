import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const Product = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control the modal
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  const products = [
    {
      id: 1,
      category: 'Black Tea',
      categoryLevel: 'Level 1',
      visibility: 'Visible',
    },
    {
      id: 2,
      category: 'Green Tea',
      categoryLevel: 'Level 2',
      visibility: 'Hidden',
    },
    {
      id: 3,
      category: 'Herbal Tea',
      categoryLevel: 'Level 3',
      visibility: 'Visible',
    },
    // Add more products here
  ];

  const openEditModal = (product) => {
    setIsEditModalOpen(true);
    setEditedProduct(product);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleEditFormSubmit = () => {
    // Handle the form submission (e.g., update product data)
    // You can implement the logic to update the product here
    console.log(editedProduct);

    // Close the modal after submission
    closeEditModal();
  };

  return (
    <div className="full-page-background">
      <div className="container mt-4 text-center">
        <h1 className="mb-5">Manage Products</h1>

        <style>
          {`
            .custom-button {
              background-color: #135e38;
              color: #fff;
              margin-right: 10px;
            }

            /* Styling for the "Edit Product" header */
            .modal-header {
              background-color: #28a745; /* Green background color */
              color: #fff; /* Text color */
              text-align: right;
              padding: 45px 0; 
            }

            /* Styling for the modal content */
            .modal-content {
              width: 1000px; /* Set width to 1000px */
              height: 500px; /* Set height to 500px */
              overflow: auto; /* Enable scrolling if content overflows */
              position: absolute;
              top: 30%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: white;
            }

            /* Add margin to the Save and Cancel buttons */
            .modal-footer {
              margin-top: 80px;
            }
          `}
        </style>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">CATEGORY LEVEL</th>
              <th scope="col">VISIBILITY</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.category}</td>
                <td>{product.categoryLevel}</td>
                <td>{product.visibility}</td>
                <td>
                  <button
                    className="btn custom-button"
                    onClick={() => openEditModal(product)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn custom-button">
                    <FontAwesomeIcon icon={faBan} />
                  </button>
                  <button className="btn custom-button">
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Product Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          contentLabel="Edit Product Modal"
          className="modal-content"
        >
          <div className="modal-header">
            <h2>Edit Product</h2>
          </div>
          <form onSubmit={handleEditFormSubmit}>

            <div className="form-group">
              <label htmlFor="productName">PRODUCT NAME:</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="name"
                value={editedProduct.name}
                onChange={handleEditFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">PRICE:</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                name="price"
                value={editedProduct.price}
                onChange={handleEditFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">PRODUCT DESCRIPTION:</label>
              <textarea
                className="form-control"
                id="productDescription"
                name="description"
                value={editedProduct.description}
                onChange={handleEditFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productCategory">PRODUCT CATEGORIES:</label>
              <input
                type="text"
                className="form-control"
                id="productCategory"
                name="category"
                value={editedProduct.category}
                onChange={handleEditFormChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button onClick={closeEditModal} className="btn btn-secondary">
              Cancel
            </button>

          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Product;
