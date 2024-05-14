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
   
    
    localStorage.setItem("facultades",JSON.stringify(facultadesarray)); //se guarda como cadena en local storage
  
    console.log(localStorage.getItem("facultades"));//lo imprime la key


    let fac = JSON.parse(localStorage.getItem("facultades")); //lo convierte a un Object


    console.log(fac );



  }


  //form.reset();

}



  
  


