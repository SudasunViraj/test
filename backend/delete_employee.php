<?php
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Extract the username from the request parameters
    $username = $_GET['username'];

    // Use prepared statement to delete the employee with the specified username
    $stmt = $conn->prepare("DELETE FROM employee WHERE username = ?");
    $stmt->bind_param("s", $username);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Employee deleted successfully"));
    } else {
        echo json_encode(array("error" => "Error: " . $stmt->error));
    }

    $stmt->close();
} else {
    echo json_encode(array("error" => "Invalid request method"));
}

$conn->close();
?>
