<?php 
header("Access-Control-Allow-Origin: http://localhost:8081"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$conn = mysqli_connect("localhost", "root", "", "expo-demo2", "3306");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query to fetch contact data
$query = "SELECT * FROM tbl_contacts";
$result = mysqli_query($conn, $query);

$contacts = array();
while($row = mysqli_fetch_assoc($result)) {
    //unset($row['contactID']);
    $image = isset($row['image']) ? $row['image'] : null;  
    if ($image) {
        $imageBase64 = base64_encode($image);
        $row['image'] = 'data:image/jpeg;base64,' . $imageBase64;
    } else {
        $row['image'] = ''; 
    }
    $contacts[] = $row;
}

echo json_encode($contacts); 
mysqli_close($conn);
?>
