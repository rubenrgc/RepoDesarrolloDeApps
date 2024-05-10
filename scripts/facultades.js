
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




  saveItems(nuevaFacultad); // esta funcion esta en el store manager
   //trae los items 
   function saveItems (nuevaFacultad){
    //console.log( item);// item es objeto que se imprime en consola
    let val = JSON.stringify(nuevaFacultad); // convertir el objeto a una cadena JSON
    //console.log(val);
    localStorage.setItem("facultades", val);//se guarda como cadena en local storage
    }
 
  if (isValid(nuevaFacultad) == true) {
    facultadesarray.push(nuevaFacultad);// lo guarda en el arreglo las variables inputname inputcampus
    debugger
    console.log(facultadesarray);

    console.log(nuevaFacultad);

  //  displayCards();//podria ser el que tengo que crear
    // form.reset();
 } else {
   alert("Error");
 }
  //aqui ya esta guardada la cadena en el store con el key facultades
//convertir cadena val en un objeto para despues desplegarlo en la lista function getNameCampusLocalStorage() {

//form.reset();






}


try {







alimentasalectfacultad();
  function alimentasalectfacultad() {
    var fac  =  JSON.parse(localStorage.getItem("facultades"));
    var select = document.getElementById("facultad");

    console.log(document.getElementById("facultad"));
    console.log(select );
  //select.innerHTML = ""; // Limpiar las opciones actuales


    for (var key in fac) { // repite para recorrer los elementos del objeto
      console.log(key);
      if (fac.hasOwnProperty(key)) {
        var facultadOption = document.createElement("option");
        console.log(facultadOption);

        debugger
        facultadOption.value = key;

        console.log(key);
        facultadOption.innerHTML = fac.namefacultad + "-" + fac.namecampus;
        console.log(facultadOption);
        select.appendChild(facultadOption);
        console.log(select);

      //QUEDARSE EN EL MENU DEL OPTION


      }
    }

  }

 

} catch (error) {
  console.log(error);
}




function init() {

  let facul1 = new Facultades("FCAyS", "Mexicali Baja California");
  facultadesarray.push(facul1); // lo pusha alo areglo

  //displayCards();

  
}
// //espera renderizar el html









window.onload = init;