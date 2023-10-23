<?php

// Replace these with your actual database connection details
$host = '127.0.0.1';
$username = 'root';
$password = '';
$database = 'project';

// Create a new database connection
$mysqli = new mysqli($host, $username, $password, $database);

// Check the connection
if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Retrieve the raw material data from the POST request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $rawMaterialId = $data['rawMaterialId'];
    $supplierName = $data['supplierName'];
    $type = $data['type'];
    $weight = $data['weight'];
    $email = $data['email'];
    $productCategory = $data['productCategory'];
    // Perform SQL insert
    $query = "INSERT INTO rawmaterials (rawMaterialId, supplierName, type, weight, productCategory) VALUES (?, ?, ?, ?, ?)";

    if ($stmt = $mysqli->prepare($query)) {
        $stmt->bind_param("sssss", $data['rawMaterialId'], $data['supplierName'], $data['type'], $data['weight'], $data['productCategory']);

        if ($stmt->execute()) {
            // Data insertion was successful
            $response = ['message' => 'Raw material added successfully'];
            http_response_code(201);
        } else {
            $response = ['message' => 'Error adding raw material'];
            http_response_code(500);
        }

        $stmt->close();
    } else {
        $response = ['message' => 'Error preparing the SQL statement'];
        http_response_code(500);
    }
} else {
    $response = ['message' => 'Invalid JSON data'];
    http_response_code(400);
}

// Close the database connection
$mysqli->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);