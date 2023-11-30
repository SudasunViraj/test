<?php
// Database configuration

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "your_database_server";
$username = "your_username";
$password = "your_password";
$database = "your_database_name";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the customer data from the POST request
$orderID = $_POST['OrderID'];
$customerName = $_POST['CustomerName'];
$phoneNumber = $_POST['PhoneNumber'];
$address = $_POST['Address'];
$email = $_POST['Email'];
$createdDate = $_POST['CreatedDate'];


$sql = "INSERT INTO buyers (OrderID, CustomerName, PhoneNumber, Address, Email, CreatedDate)
        VALUES ('$orderID', '$customerName', '$phoneNumber', '$address', '$email', '$createdDate')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    if ($conn->errno == 1062) {
        echo "Error: Duplicate entry for OrderID";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


// Close the database connection
$conn->close();
?>
