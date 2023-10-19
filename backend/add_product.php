<?php
// Include your database connection code here (e.g., connection to the Bluehills database).

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ravindu";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ensure that the request is a POST request.

    // Get JSON data from the request.
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        // Extract data from the JSON object.
        $productName = $data['productName'];
        $productCategory = $data['productCategory'];
        $categoryLevel = $data['categoryLevel'];
        $visibility = $data['visibility'];

        // Perform server-side validation here if needed.

        // Insert data into the 'product' table.
        $sql = "INSERT INTO product (productName, productCategory, categoryLevel, visibility) 
                VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $productName, $productCategory, $categoryLevel, $visibility);

        if ($stmt->execute()) {
            // The product was successfully added to the database.
            echo json_encode(array("message" => "Product added successfully"));
        } else {
            // Error handling if the product insertion fails.
            echo json_encode(array("message" => "Product addition failed"));
        }

        $stmt->close();
    } else {
        // Invalid JSON data.
        echo json_encode(array("message" => "Invalid JSON data"));
    }
} else {
    // Handle other HTTP methods (if needed).
    echo json_encode(array("message" => "Invalid request method"));
}
?>
