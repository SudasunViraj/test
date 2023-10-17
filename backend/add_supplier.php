<?php
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Database connection parameters
$servername = "your_database_server";
$username = "your_database_username";
$password = "your_database_password";
$database = "your_database_name";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get JSON data from the request body
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = $data['name'];
    $phoneNumber = $data['phoneNumber'];
    $address = $data['address'];
    $signUpChannel = $data['signUpChannel'];
    $email = $data['email'];
    $registeredDate = $data['registeredDate'];

    $sql = "INSERT INTO suppliers (name, phoneNumber, address, signUpChannel, email, registeredDate)
            VALUES ('$name', '$phoneNumber', '$address', '$signUpChannel', '$email', '$registeredDate')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Supplier added successfully"));
    } else {
        echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
    }
} else {
    echo json_encode(array("error" => "Invalid JSON data"));
}

$conn->close();
?>
