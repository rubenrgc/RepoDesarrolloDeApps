let facultadesarray = [];

//constructor para poder utilizar el esquema en que se guardan lo datos.js
function Facultades(namefacultad, namecampus) {
  this.namefacultad = namefacultad;
  this.namecampus = namecampus;
}

//validacioon

function isValid(unaFacultad) {
  let validacion = true;

  if (unaFacultad.name == "") {
    validacion = false;
  }

  if (unaFacultad.campus == "") {
    validacion = false;
  }

  return validacion;
}

//registrer

function registerFacultades() {
  //toma los valores de los campos y los guarda en las variables
  let inputName = document.getElementById("txtFacultad").value;
  let inputCampus = document.getElementById("txtCampus").value;

  //objeto nuevo que almavena los valores en la variable nuevaFacultad
  let nuevaFacultad = new Facultades(inputName, inputCampus);
  if (isValid(nuevaFacultad) == true) {
    facultadesarray.push(nuevaFacultad); // lo guarda en el arreglo las variables inputname inputcampus

    console.log(facultadesarray);

    console.log(nuevaFacultad);

    //  displayCards();//podria ser el que tengo que crear
    // form.reset();
  } else {
    alert("Error");
  }
  saveItems(facultadesarray); // esta funcion esta en el store manager
  //trae los items
  function saveItems(facultadesarray) {
    //console.log( item);// item es objeto que se imprime en consola
   
    debugger
 
    localStorage.setItem("facultades",JSON.stringify(facultadesarray)); //se guarda como cadena en local storage
  
    console.log(localStorage.getItem("facultades"));


    fac = JSON.parse(localStorage.getItem("facultades"));


    console.log(fac );



  }


  //aqui ya esta guardada la cadena en el store con el key facultades
  //convertir cadena val en un objeto para despues desplegarlo en la lista function getNameCampusLocalStorage() {

  //form.reset();



  try {
    alimentasalectfacultad();
    function alimentasalectfacultad() {
       fac = JSON.parse(localStorage.getItem("facultades"));
  
      console.log(facultadesarray);
      var select = document.createElement("select");
      select =JSON.parse( document.getElementById("facultad"));
      console.log(select);
      console.log(document.getElementById("facultad"));
      console.log(select);
      //select.innerHTML = ""; // Limpiar las opciones actuales
  
      for (var key in facultadesarray) {
        // repite para recorrer los elementos del objeto
        console.log(facultadesarray);
        console.log(key);
        if (facultadesarray.hasOwnProperty(key)) {
          var facultadOption = document.createElement("option");
          console.log(facultadOption);
  
  
          facultadOption.value = facultadesarray[key].id;
          
          
          
          
         
          console.log(facultadesarray);
          facultadOption.innerHTML = facultadesarray[key].namefacultad + "-" + facultadesarray[key].namecampus;
          console.log(facultadOption);
         
          select.appendChild(facultadOption);
          console.log(select);
  
  
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  























}

