<?php

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$host = '127.0.0.1';
$username = 'root';
$password = '';
$database = 'project';

$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

$query = "SELECT * FROM rawmaterial";

$result = $mysqli->query($query);

if ($result) {
    $rawMaterials = array();

    while ($row = $result->fetch_assoc()) {
        $rawMaterials[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($rawMaterials);
    http_response_code(200);
} else {
    $response = ['message' => 'Error retrieving raw materials'];
    header('Content-Type: application/json');
    echo json_encode($response);
    http_response_code(500);
}

$mysqli->close();
?>
