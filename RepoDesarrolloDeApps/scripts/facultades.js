let facultadesarray = [];

//constructor para poder utilizar el esquema en que se guardan lo datos.js
function Facultades(namefacultad, namecampus) {
  this.namefacultad = namefacultad;
  this.namecampus = namecampus;
}

//validacioon

function isValidfacs(unaFacultad) {
  let validacion = true;

  if (unaFacultad.namefacultad == "") {
    validacion = false;
  }

  if (unaFacultad.namecampus == "") {
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


  if (isValidfacs(nuevaFacultad) ) {



     facultadesarray.push(nuevaFacultad); 
     saveItems(nuevaFacultad);
     //displayCards();
    // displayTable();
     form.reset();
  } else {
    alert("Error");
  }

}



  
  
