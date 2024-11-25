<?php 
header("Access-Control-Allow-Origin: http://localhost:8081"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$conn = mysqli_connect("localhost", "root", "", "expo-demo2", "3306");
$database = mysqli_select_db($conn, 'expo-demo2');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$EncodedData =  file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$contactNameF = $DecodedData['firstName'];
$contactNameL = $DecodedData['lastName'];
$contactNumber = $DecodedData['contactNumber'];
$contactRelation = $DecodedData['relation'];
$contactImage = $DecodedData['image'];

if (empty($contactNameF) || empty($contactNameL) || 
    empty($contactNumber) || empty($contactRelation)) {
    $Message = "Please provide all required fields.";
    $JSONMessage = json_encode($Message);
    echo $JSONMessage;
    mysqli_close($conn);
    exit();
}

$insert_Query = "INSERT INTO tbl_contacts( contactName, contactNumber, 
contactRelation, contactImage) 
VALUES('$contactNameF $contactNameL', '$contactNumber', 
'$contactRelation', '$contactImage')";


if(mysqli_query($conn, $insert_Query))
{
    $Message = "Contact saved successfully";
    $JSONMessage = json_encode($Message);
    echo $JSONMessage;
}
else
{
    $Message = "Saving unsuccessful. Please try again";
	$JSONMessage = json_encode($Message);
	echo $JSONMessage;
}

mysqli_close($conn);
?>
