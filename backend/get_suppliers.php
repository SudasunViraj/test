// backend/get_suppliers.php

<?php
// Database connection parameters
$servername = "your_database_server";
$username = "your_database_username";
$password = "your_database_password";
$database = "your_database_name";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to retrieve supplier data
$sql = "SELECT * FROM suppliers";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $suppliers = array();
    while ($row = $result->fetch_assoc()) {
        $suppliers[] = $row;
    }
    echo json_encode($suppliers);
} else {
    echo "No suppliers found";
}

// Close the database connection
$conn->close();
?>
