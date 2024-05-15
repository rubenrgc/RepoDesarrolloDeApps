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
  let validacion = true;

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
  return validacion;
}
  

  
  
  

//registrar

// agarra los valores de lols campos y los guarda en variables
function registrar() {
  let inputNombre = document.getElementById("txtNombre").value;
  let inputEdad = document.getElementById("txtEdad").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputEmail = document.getElementById("txtEmail").value;
  let inputPassword = document.getElementById("txtPassword").value;
  let inputMateria1 = document.getElementById("txtMateria1").value;
  let inputMateria2 = document.getElementById("txtMateria2").value;
  let inputMateria3 = document.getElementById("txtMateria3").value;
  let inpuFacultad = document.getElementById("facultad").value;

  let nuevoAlumno = new Student(
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
    debugger;

    students.push(nuevoAlumno);

    // displayCards();
    displayTable();
    form.reset();
  } else {
    alert("Por favor completa alguno de los campos");
  }


  
}

function initStudents() {
  let student1 = new Student(
    "Samuel",
    99,
    "Hombre",
    "samurl@hotmail.com",
    1234567,
    "Matematicas",
    "Historia",
    "Quimica",
    "Cuencias Sociales"
  );

  students.push(student1);

  console.log(student1);

  //displayCards();

  displayTable();
}
window.onload = initStudents;
