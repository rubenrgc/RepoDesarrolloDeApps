function displayCards(student) {
  let card = "";

 //  for (let i = 0; i < students.length; i++) {
   // let student = students[i];
    card += `<div id="${student.id}" class='student'>
    <h4> Nombre: ${student.name}</h4> 
    <p> Edad: ${student.age}</p> 
    <p>  Genero: ${student.gender}</p> 
    <p>  Email: ${student.email}</p> 
    <p>  Password: ${student.password}</p> 
    <p>  Materia 1: ${student.materia1}</p> 
    <p> Materia 2: ${student.materia2}</p> 
    <p>  Materia 3: ${student.materia3}</p> 
    <p> Facultad : ${student.facultad}</p> 
  
    <button class="button" >Eliminar</button>
    </div>
    `;
    document.getElementById("studentList").innerHTML+= card;
  }



function searchToDataBase(){
$.ajax({ url:"./app/get_students.php",
          type:"GET",
          dataType:"json",
          success:function(response){
            console.log(response);
            if(response.success){
               console.log(response.data);
              response.data.forEach(displayCards);
              

            }else{
              console.log("Error en la respuesta del servidor");

            }

          },
          error:function(xhr,status,error){

            console.log(error);
            //funcion que despliegue 
          }



})


}


  function init(){

searchToDataBase();


}
window.onload=init;



