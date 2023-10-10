import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const Product = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control the edit modal
    const [editedProduct, setEditedProduct] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
    });

    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to control the add modal
    const [newProduct, setNewProduct] = useState({
        productId: '',
        productCategory: '',
        categoryLevel: '',
        visibility: 'Enabled', // Default value
    });
    const handleVisibilityChange = (product) => {
        const productIndex = products.findIndex((p) => p.id === product.id);

        const updatedProduct = { ...product, visibility: 'Disabled' };

        const updatedProducts = [...products];
        updatedProducts[productIndex] = updatedProduct;

        setProducts(updatedProducts);
    };


    const [products, setProducts] = useState([
        {
            "id": "Dragonwell",
            "category": "Green Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Sencha",
            "category": "Green Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Earl Grey",
            "category": "Black Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Chamomile",
            "category": "Herbal Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Jasmine",
            "category": "Green Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "English Breakfast",
            "category": "Black Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Peppermint",
            "category": "Herbal Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Oolong",
            "category": "Semi-oxidized Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Darjeeling",
            "category": "Black Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
        {
            "id": "Matcha",
            "category": "Green Tea",
            "categoryLevel": "Main Category",
            "visibility": "Disabled"
        },
    ]);

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
        // Perform edit action here
        console.log(editedProduct);
        closeEditModal();
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleAddFormChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        const newProductData = {
            id: products.length + 1,
            name: newProduct.productId,
            category: newProduct.productCategory,
            categoryLevel: newProduct.categoryLevel,
            visibility: newProduct.visibility,
        };

        // Add the new product to the products array
        const updatedProducts = [...products, newProductData];

        // Update the products state with the new data
        setProducts(updatedProducts);

        // Close the modal
        closeAddModal();
    };
    const saveDetails = () => {

    }

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

                    .modal-footer {
                        margin-top: 80px;
                    }
                `}
                </style>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <button
                        style={{ marginBottom: '10px' }}
                        className="btn btn-primary"
                        onClick={openAddModal}
                    >
                        Add Products
                    </button>

                    {/* Product Table */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">CATEGORY LEVEL</th>
                                <th scope="col">VISIBILITY</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product.id}>
                                    <th scope="row">{product.name}</th>
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
                                        <button
                                            className="btn custom-button"
                                            onClick={() => handleVisibilityChange(product)}
                                        >
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
                        {/* Edit Product Modal Content */}
                        {/* ... (Your existing edit product modal content) */}
                    </Modal>

                    {/* Add Product Modal */}
                    <Modal
                        isOpen={isAddModalOpen}
                        onRequestClose={closeAddModal}
                        contentLabel="Add Product Modal"
                        className="modal-content"
                    >
                        <div className="modal-header" style={{ display: 'flex', justifyContent: 'center' }}>
                            <h2>Add Products</h2>
                        </div>
                        <form onSubmit={handleAddFormSubmit} className="mx-auto">
                            {/* Add Product Form */}
                            <div className="form-group">
                                <label htmlFor="productId">Product Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productId"
                                    name="productId"
                                    value={newProduct.productId}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productCategory">Product Category:</label>
                                <select
                                    className="form-control"
                                    id="productCategory"
                                    name="productCategory"
                                    value={newProduct.productCategory}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                >
                                    <option value="Choose an Option">Choose an Option</option>
                                    <option value="Black Tea">Black Tea</option>
                                    <option value="Green Tea">Green Tea</option>
                                    <option value="Herbal Tea">Herbal Tea</option>

                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryLevel">Category Level:</label>
                                <select
                                    className="form-control"
                                    id="categoryLevel"
                                    name="categoryLevel"
                                    value={newProduct.categoryLevel}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                >
                                    <option value="Choose an Option">Choose an Option</option>
                                    <option value="Main Category">Main Category</option>
                                    <option value="Sub Category">Sub Category</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="visibility">Visibility:</label>
                                <select
                                    className="form-control"
                                    id="visibility"
                                    name="visibility"
                                    value={newProduct.visibility}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                >
                                                                        <option value="Choose an option">Choose an option</option>
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={saveDetails}>
                                Save
                            </button>
                            <button onClick={closeAddModal} className="btn btn-secondary">
                                Cancel
                            </button>
                        </form>
                    </Modal>

                    {/* Edit Product Modal */}
                    <Modal
                        isOpen={isEditModalOpen}
                        onRequestClose={closeEditModal}
                        contentLabel="Edit Product Modal"
                        className="modal-content"
                    >
                        <div className="modal-header" style={{ display: 'flex', justifyContent: 'center' }}>
                            <h2>Edit Product</h2>
                        </div>
                        <form onSubmit={handleEditFormSubmit} className="mx-auto">

                            <div className="form-group">
                                <label htmlFor="productName">PRODUCT NAME:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    name="name"
                                    value={editedProduct.name}
                                    onChange={handleEditFormChange}
                                    style={{ width: '950px' }}

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
                                    style={{ width: '950px' }}

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
                                    style={{ width: '950px' }}

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
                                    style={{ width: '950px' }}

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
        </div>
    );
};

export default Product;
