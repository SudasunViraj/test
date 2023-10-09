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

// Get supplier details from the POST request
$name = $_POST['name'];
$phoneNumber = $_POST['phoneNumber'];
$address = $_POST['address'];
$signUpChannel = $_POST['signUpChannel'];
$email = $_POST['email'];
$registeredDate = $_POST['registeredDate'];

// SQL query to insert a new supplier into the database
$sql = "INSERT INTO suppliers (name, phoneNumber, address, signUpChannel, email, registeredDate)
        VALUES ('$name', '$phoneNumber', '$address', '$signUpChannel', '$email', '$registeredDate')";

if ($conn->query($sql) === TRUE) {
    echo "Supplier added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
