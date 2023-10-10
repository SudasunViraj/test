<?php
// Establish a database connection
$servername = "your_server_name";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the request
$data = json_decode(file_get_contents("php://input"));

// Insert data into the 'sales' table
$sql = "INSERT INTO sales (order_id, order_date, channel, order_type, payment_method, amount) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssd", $data->orderId, $data->orderDate, $data->channel, $data->orderType, $data->paymentMethod, $data->amount);

if ($stmt->execute()) {
    // Successfully inserted the data
    echo json_encode($data);
} else {
    // Failed to insert data
    echo json_encode(["error" => "Failed to insert data"]);
}

$stmt->close();
$conn->close();
?>
