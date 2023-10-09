<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the request
    $productName = $_POST['productId'];
    $productCategory = $_POST['productCategory'];
    $categoryLevel = $_POST['categoryLevel'];
    $visibility = $_POST['visibility'];

    // Perform data validation as needed

    // Insert the data into the database
    $sql = "INSERT INTO products (product_name, product_category, category_level, visibility) 
            VALUES ('$productName', '$productCategory', '$categoryLevel', '$visibility')";

    if ($conn->query($sql) === TRUE) {
        // Successfully inserted the product
        echo json_encode(['message' => 'Product added successfully']);
    } else {
        // Error occurred while inserting the product
        echo json_encode(['error' => 'Error adding product']);
    }

    // Close the database connection
    $conn->close();
}
?>
