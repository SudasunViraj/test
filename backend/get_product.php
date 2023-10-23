<?php
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "project";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $sql = "SELECT productID, productName, productCategory, quantity, productPrice, visibility FROM product";
    $result = $conn->query($sql);

    if ($result) {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }

        echo json_encode($products);
    } else {
        echo json_encode(array("message" => "Failed to retrieve product data: " . $conn->error));
    }
} else {
    echo json_encode(array("message" => "Invalid request method"));
}

$conn->close();
?>
