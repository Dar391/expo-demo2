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

$id = $DecodedData['id'];
$firstName = $DecodedData['firstName'];
$lastName = $DecodedData['lastName'];
$phoneNumber = $DecodedData['phoneNumber'];
$relation = $DecodedData['relation'];
$image = $DecodedData['image'];

$query = "UPDATE tbl_contacts SET 
    contactName = '$firstName $lastName', 
    contactNumber = '$phoneNumber', 
    contactRelation = '$relation',
    contactImage = '$image' 
    WHERE contactID = $id";

if ($conn->query($query) === TRUE) {
    echo json_encode(["success" => true, "message" => 
    "Contact updated successfully"]);
} else {
    echo json_encode(["success" => false, "message" => 
    "Error updating contact: " . $conn->error]);
}

mysqli_close($conn);
?>
