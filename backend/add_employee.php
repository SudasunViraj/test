<?php
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ravindu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get JSON data from the request body
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    // Extract data from the JSON object
    $username = $data['username'];
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $status = $data['status'];
    $usergroups = $data['usergroups'];

    // Insert data into the database
    $sql = "INSERT INTO employee (username, firstname, lastname, status, usergroups)
            VALUES ('$username', '$firstname', '$lastname', '$status', '$usergroups')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Employee added successfully"));
    } else {
        echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
    }
} else {
    echo json_encode(array("error" => "Invalid JSON data"));
}

$conn->close();
?>
