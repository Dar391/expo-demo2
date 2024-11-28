<?php
header("Access-Control-Allow-Origin: http://localhost:8081"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$conn = mysqli_connect("localhost", "root", "", "expo-demo2", "3306");
$database = mysqli_select_db($conn, 'expo-demo2');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);


if (isset($DecodedData['id'])) {
    $id = $DecodedData['id'];

    // SQL query to delete the record
    $query = "DELETE FROM tbl_contacts WHERE contactID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        // Respond with a success message
        echo json_encode([
            "success" => true,
            "message" => "Contact deleted successfully"
        ]);
    } else {
        // Respond with an error message
        echo json_encode([
            "success" => false,
            "message" => "Error deleting contact: " . $stmt->error
        ]);
    }

    $stmt->close();
} else {
    // Respond with an error message if ID is missing
    echo json_encode([
        "success" => false,
        "message" => "ID is required"
    ]);
}

mysqli_close($conn);

?>