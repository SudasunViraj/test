<?php

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Include your database connection configuration here
$host = '127.0.0.1';
$username = 'localhost';
$password = '';
$database = 'project';

// Create a new sale by receiving data from your React app
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the request
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data) {
        // Validate and sanitize the data as needed
        $orderId = $data['orderId'];
        $orderDate = $data['orderDate'];
        $customerName = $data['customerName'];
        $paymentMethod = $data['paymentMethod'];
        $amount = $data['amount'];

        // Create a new database connection
        $conn = new mysqli($host, $username, $password, $database);

        // Check the connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare and execute an SQL insert statement
        $sql = "INSERT INTO sales (order_id, order_date, customer_name, payment_method, amount) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss", $orderId, $orderDate, $customerName, $paymentMethod, $amount);

        if ($stmt->execute()) {
            $response = array("success" => true, "message" => "Sale added successfully");
        } else {
            $response = array("success" => false, "message" => "Error adding sale: " . $stmt->error);
        }

        // Close the database connection
        $stmt->close();
        $conn->close();
    } else {
        $response = array("success" => false, "message" => "Invalid JSON data");
    }

    // Return a JSON response to the React app
    header('Content-Type: application/json');
    echo json_encode($response);
}
