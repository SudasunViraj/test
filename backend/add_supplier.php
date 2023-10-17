<?php
// Database connection parameters
$servername = "your_database_server";
$username = "your_database_username";
$password = "your_database_password";
$database = "your_database_name";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$phoneNumber = $_POST['phoneNumber'];
$address = $_POST['address'];
$signUpChannel = $_POST['signUpChannel'];
$email = $_POST['email'];
$registeredDate = $_POST['registeredDate'];

$sql = "INSERT INTO suppliers (name, phoneNumber, address, signUpChannel, email, registeredDate)
        VALUES ('$name', '$phoneNumber', '$address', '$signUpChannel', '$email', '$registeredDate')";

if ($conn->query($sql) === TRUE) {
    echo "Supplier added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
