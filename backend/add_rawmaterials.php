<?php

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Replace these with your actual database connection details
$host = '127.0.0.1';
$username = 'root';
$password = '';
$database = 'project';

// Create a new database connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Retrieve the raw material data from the POST request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $rawMaterialId = $data['rawMaterialId'];
    $supplierName = $data['supplierName'];
    $type = $data['type'];
    $weight = $data['weight'];
    $productCategory = $data['productCategory'];
    // Perform SQL insert
    $sql = "INSERT INTO rawmaterials (rawMaterialId, supplierName, type, weight, productCategory) VALUES (?, ?, ?, ?, ?)";

     if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Employee added successfully"));
    } else {
        echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
    }
} else {
    $response = ['message' => 'Invalid JSON data'];
    http_response_code(400);
}

// Close the database connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);