<?php
$serverName="localhost";
$userName="ruben";
$password="12345";// "root" "12345",ruben 12345
$dbName="sistema_escolar";

$conn = new mysqli($serverName,$userName,$password,$dbName);

if($conn->connect_error){

    die("Error de conexion:" . $conn->connect_error);

}
echo "Conexion exitosa";
?>