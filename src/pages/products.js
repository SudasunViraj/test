import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import productbackground from '../images/productsbackground.jpg'

const Product = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${productbackground})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
    });

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        productID: '',
        productName: '', // Add this
        productCategory: '', // Add this
        quantity: '', // Add this
        productPrice: '', // Add this
        visibility: 'Enabled', // Default value
    });

    const handleVisibilityChange = (product) => {
        const productIndex = products.findIndex((p) => p.productID === product.productID);
    
        if (productIndex !== -1) {
            const updatedProducts = [...products];
            updatedProducts[productIndex] = {
                ...product,
                visibility: 'Disabled'
            };
    
            setProducts(updatedProducts);
        }
    };
    


 
        
    const [products, setProducts] = useState([
        {
            "productID": "1",
            "productName": "Chai Tea",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "1200",
            "visibility": "Enabled"
        },
        {
            "productID": "2",
            "productName": "Chamomile Tea",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "800",
            "visibility": "Enabled"
        },
        {
            "productID": "3",
            "productName": "Earl Grey Tea",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "1500",
            "visibility": "Enabled"
        },
        {
            "productID": "4",
            "productName": "Green Tea Bags",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "45",
            "visibility": "Enabled"
        },
        {
            "productID": "5",
            "productName": "Herbal Tea Assortment",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "3",
            "visibility": "Enabled"
        },
        {
            "productID": "6",
            "productName": "Decaffeinated Tea",
            "productCategory": "Tea",
            "quantity": "Out of Stock",
            "productPrice": "50",
            "visibility": "Disabled"
        },
        // Add 6 dummy data rows here
        {
            "productID": "7",
            "productName": "New Tea 1",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "15",
            "visibility": "Enabled"
        },
        {
            "productID": "8",
            "productName": "New Tea 2",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "25",
            "visibility": "Enabled"
        },
        {
            "productID": "9",
            "productName": "New Tea 3",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "10",
            "visibility": "Enabled"
        },
        {
            "productID": "10",
            "productName": "New Tea 4",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "30",
            "visibility": "Enabled"
        },
        {
            "productID": "11",
            "productName": "New Tea 5",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "12",
            "visibility": "Enabled"
        },
        {
            "productID": "12",
            "productName": "New Tea 6",
            "productCategory": "Tea",
            "quantity": "In Stock",
            "productPrice": "18",
            "visibility": "Enabled"
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

        const formDataToSend = {
            productID: newProduct.productID,
            productName: newProduct.productName,
            productCategory: newProduct.productCategory,
            quantity: newProduct.quantity,
            productPrice: newProduct.productPrice,
            visibility: newProduct.visibility,
        };

        // Make an HTTP POST request to the PHP API endpoint.
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataToSend),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        closeAddModal();
    };

    const fetchProductData = () => {
        fetch('your-api-endpoint')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    const saveDetails = () => {

    }

    return (

        <div className="full-page-background" style={backgroundImageStyle}>
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
                                <th scope="col">Product ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Visibility</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
    {products.map((product, index) => (
        <tr key={product.productID}>
            <th scope="row">{product.productID}</th>
            <td>{product.productName}</td>
            <td>{product.productCategory}</td>
            <td>{product.quantity}</td>
            <td>{product.productPrice}</td>
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
                                <label htmlFor="productID">Product ID:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productID"
                                    name="productID"
                                    value={newProduct.productID}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productCategory">Product Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    name="productName"
                                    value={newProduct.productName}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                />
                                {/* <option value="Choose an Option">Choose an Option</option>
                                    <option value="Black Tea">Black Tea</option>
                                    <option value="Green Tea">Green Tea</option>
                                    <option value="Herbal Tea">Herbal Tea</option> */}

                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryLevel">Product Category:</label>
                                <select
                                    className="form-control"
                                    id="productCategory"
                                    name="productCategory"
                                    value={newProduct.productCategory}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                >
                                    <option value="Black Tea">Black Tea</option>
                                    <option value="Green Tea">Green Tea</option>
                                    <option value="Herbal Tea">Herbal Tea</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={newProduct.quantity}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                />
                                {/* <option value="Choose an option">Choose an option</option>
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option> */}

                            </div>

                            <div className="form-group">
                                <label htmlFor="visibility">Product Price:</label>
                                <input type="text"
                                    className="form-control"
                                    id="productPrice"
                                    name="productPrice"
                                    value={newProduct.productPrice}
                                    onChange={handleAddFormChange}
                                    style={{ width: '950px' }}
                                />
                                {/* <option value="Choose an option">Choose an option</option>
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option> */}

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
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option>

                                    {/* <option value="Choose an option">Choose an option</option>
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option> */}
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
