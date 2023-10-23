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

$query = "SELECT * FROM orders";
$result = $conn->query($query);

$orders = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $order = [
            "orderId" => $row["order_id"],
            "customerName" => $row["customer_name"],
            "numOfItems" => $row["num_of_items"],
            "productId" => $row["product_id"],
            "orderPlacedDate" => $row["order_placed_date"]
        ];

        $orders[] = $order;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($orders);
?>
