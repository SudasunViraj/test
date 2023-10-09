<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$username = $_POST['username'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname']; 
$status = $_POST['status'];
$usergroups = $_POST['usergroups'];

// Insert data into the database
$sql = "INSERT INTO employees (username, firstname, lastname, status, usergroups)
        VALUES ('$username', '$firstname', '$lastname', '$status', '$usergroups')";

if ($conn->query($sql) === TRUE) {
    echo "Employee added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
