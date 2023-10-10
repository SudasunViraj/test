<?php
// Replace these with your actual database credentials
$servername = "your_server_name";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Establish a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Select data from the 'sales' table
$sql = "SELECT * FROM sales";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $salesData = [];
    while ($row = $result->fetch_assoc()) {
        $salesData[] = $row;
    }
    echo json_encode($salesData);
} else {
    echo json_encode([]);
}

$conn->close();
?>
