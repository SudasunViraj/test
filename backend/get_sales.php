<?php

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "project";

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
