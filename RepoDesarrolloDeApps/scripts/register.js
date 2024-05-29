let students = [];

// constructor
function Student(
  name,
  age,
  gender,
  email,
  password,
  materia1,
  materia2,
  materia3,
  facultad
) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.password = password;
  this.materia1 = materia1;
  this.materia2 = materia2;
  this.materia3 = materia3;
  this.facultad = facultad;
}

//validacion

function isValid(unaAlumno) {
  //declaracion de variable validacion que se usa en el objeto Student
  var validacion = true;

  if (unaAlumno.name == "") {
    validacion = false;
  }

  if (unaAlumno.age == "") {
    validacion = false;
  }
  if (unaAlumno.gender == "") {
    validacion = false;
  }

  if (unaAlumno.email == "") {
    validacion = false;
  }
  if (unaAlumno.password == "") {
    validacion = false;
  }

  if (unaAlumno.materia1 == "") {
    validacion = false;
  }
  if (unaAlumno.materia2 == "") {
    validacion = false;
  }

  if (unaAlumno.materia3 == "") {
    validacion = false;
  }

  if (unaAlumno.facultad == "") {
    validacion = false;
  }

  // retorna nuevo estado de la variable validacion
  return validacion;
}

//registrar lo utiliza el boton de registrar en el formulario HTML alumno

// agarra los valores de lols campos y los guarda en variables
function registrar() {
  var inputNombre = document.getElementById("txtNombre").value;
  var inputEdad = document.getElementById("txtEdad").value;
  var inputGender = document.getElementById("txtGender").value;
  var inputEmail = document.getElementById("txtEmail").value;
  var inputPassword = document.getElementById("txtPassword").value;
  var inputMateria1 = document.getElementById("txtMateria1").value;
  var inputMateria2 = document.getElementById("txtMateria2").value;
  var inputMateria3 = document.getElementById("txtMateria3").value;
  var inpuFacultad = document.getElementById("facultad").value;

  //pasa el contenido de las variables al arreglo aqui mismo declarado
  var nuevoAlumno = new Student(
    inputNombre,
    inputEdad,
    inputGender,
    inputEmail,
    inputPassword,
    inputMateria1,
    inputMateria2,
    inputMateria3,
    inpuFacultad
  );

  if (isValid(nuevoAlumno)) {
    //valida si la variable validacion es verdadera y si no envia un error

    insertToDataBase(nuevoAlumno);
    console.log(nuevoAlumno);

    //students.push(nuevoAlumno);//empuja los datos que contiene el arreglo al arreglo
    //saveItems2(nuevoAlumno); //usa la funcion que se encuentra en storeManager.js para decodificar los datos
    // function saveItems2(item) {

    //   console.log(item);
     
    //   let val = JSON.stringify(item); 
         
    //   console.log(val);
     
    //   localStorage.setItem("facultades",val);
    //   }
     
    //displayCards();//usa la funcion anterior para desplegar las cards
    // displayTable();//usa la funcion anterior para desplegar las tablas
   // form.reset();
  } else {
    alert("Por favor completa alguno de los campos");
  }
}

function insertToDataBase(newStudent) {


  $.ajax({
  
    url:  "./app/register.php",
    method: "POST",
    data:{
      name: newStudent.name,
      age: newStudent.age,
      gender: newStudent.gender,
      email: newStudent.email,
      password: newStudent.password,
      materia1: newStudent.materia1,
      materia2: newStudent.materia2,
      materia3: newStudent.materia3,
      facultad: newStudent.facultad,
    },
    dataType: "json",
  
    
    success: function (response) {
      var JSONresult = response;
 
      if (JSONresult.success) {
        


 
 
  let val = JSON.stringify( JSONresult); 
     
  console.log(val);
   
        console.log(JSONresult);
      //   setTimeout(function () {
      //     location.reload();
      //   }, 1000);
      // } else {
      //   console.log("Error, Por favor intente de nuevo");
       }
    },
    error: function (response) {
      var JSONresult = response;

 
      let val = JSON.stringify( JSONresult); 
     
      console.log(val);

      console.log('Error: ' + response);
     
  
    }
  });
}

// function init() {//usa la fucncion para inicializar lo que se necesite en la pagina antes de empezar a funcionar
//   let student1 = new Student(//inserta un alumno en el arreglo
//     "Samuel",
//     99,
//     "Hombre",
//     "samurl@hotmail.com",
//     1234567,
//     "Matematicas",
//     "Historia",
//     "Quimica",
//     "Cuencias Sociales"
//   );

//   students.push(student1);//empuja el student1 a el arreglo

//   console.log(student1);//imprime lo que contiene student1

//   displayCards();

//   displayTable();
// }
// window.onload = init;// espera a que cargue html
