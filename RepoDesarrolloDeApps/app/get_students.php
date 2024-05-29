<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "GET" ){
//verificar la conexion a la base de datos
if($conn->connect_error){
die("Error de conexion de la base de datos" .  $conn->connect_error);


}

$query = "SELECT id,name,age,gender,email,password,materia1,materia2,materia3,facultad FROM estudiantes";
$stmt=$conn->prepare($query);
$stmt->execute();
$result=$stmt->get_result(); 

if($result->num_rows >0){
    $data = array();
    while($row = $result->fetch_assoc()){
        $data[] = array(
              "id"=>$row["id"],
              "name" =>$row["name"],
              "age" =>$row["age"],
              "gender"=>$row["gender"],
              "email" =>$row["email"],
              "password" =>$row["password"],
              "materia1"=>$row["materia1"],
              "materia2" =>$row["materia2"],
              "materia3" =>$row["materia3"],
              "facultad" =>$row["facultad"],

        
        );}
    
        echo json_encode(array("success" => true,"data" => $data));


}else {
    echo json_encode(array("success" => false,"error" => "No se encontraron los datos"));

}
$stmt->close();

}else{

    echo json_encode(array("success" => false,"error" => "Solicitud no valida"));
}
$conn->close();
?>


