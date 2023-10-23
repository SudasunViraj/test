<?php
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
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

// Retrieve employee data from the database
$sql = "SELECT * FROM employee";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $employees = array();
    while ($row = $result->fetch_assoc()) {
        $employee = array(
            'username' => $row['username'],
            'firstname' => $row['firstname'],
            'lastname' => $row['lastname'],
            'status' => $row['status'],
            'usergroups' => $row['usergroups']
        );
        $employees[] = $employee;
    }

    echo json_encode($employees);
} else {
    echo json_encode(array("message" => "No employees found"));
}

$conn->close();
?>
