<?php

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$host = '127.0.0.1'; 
$username = 'root'; 
$password = ''; 
$database = 'project';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $orderId = $data['orderId'];
        $customerName = $data['customerName'];
        $numOfItems = $data['numOfItems'];
        $productId = $data['productId'];
        $orderPlacedDate = $data['orderPlacedDate'];

        $stmt = $conn->prepare("INSERT INTO orders (order_id, customer_name, num_of_items, product_id, order_placed_date) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $orderId, $customerName, $numOfItems, $productId, $orderPlacedDate);

        if ($stmt->execute()) {
            $response = ["message" => "Order added successfully"];
        } else {
            $response = ["error" => "Failed to add order"];
        }

        $stmt->close();
    } else {
        $response = ["error" => "Invalid JSON data"];
    }
} else {
    http_response_code(405); 
    $response = ["error" => "Invalid request method"];
}

header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
