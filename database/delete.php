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

$query = "SELECT * FROM tbl_contacts";
$result = mysqli_query($conn, $query);

$contacts =  array();



?>