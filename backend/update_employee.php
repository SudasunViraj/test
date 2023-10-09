<?php
// Replace with your database credentials
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the username and 'locked' status from the URL parameters
$usernameToUpdate = $_GET['username'];
$locked = $_GET['locked'];

// Update the 'locked' status in the database
$sql = "UPDATE employees SET locked = '$locked' WHERE username = '$usernameToUpdate'";

if ($conn->query($sql) === TRUE) {
    echo "Employee locked status updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
