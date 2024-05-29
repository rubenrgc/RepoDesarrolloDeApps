<?php
header("Access-Control-Allow-Origin: *");

// Permitir métodos HTTP GET, POST, y OPTIONS

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');

header("Access-Control-Allow-Headers: Content-Type, Authorization");
include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST" ){

if(isset($_POST['name'],$_POST['age'],$_POST['gender'],$_POST['email'],$_POST['password'],$_POST['materia1'],$_POST['materia2'],$_POST['materia3'],$_POST['facultad'])){

$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];
$materia1 = $_POST['materia1'];
$materia2 = $_POST['materia2'];
$materia3 = $_POST['materia3'];
$facultad = $_POST['facultad'];

$stmt_insert_usuarios =$conn->prepare("INSERT INTO estudiantes(name,age,gender,email,password,materia1,materia2,materia3,facultad) VALUES (?,?,?,?,?,?,?,?,?)");
$stmt_insert_usuarios->bind_param("sisssiiis",$name,$age,$gender,$email,$password,$materia1,$materia2,$materia3,$facultad);
$stmt_insert_usuarios->execute();


echo json_encode(array("success" => true));
$stmt_insert_usuarios -> close();
}

$conn -> close();
exit();
}
?>