function getNameCampusLocalStorage2() {
    


    document.addEventListener("DOMContentLoaded", function() {
        // Seleccionar el elemento <select>
        var select = document.getElementById("facultad");
      
        // Recorrer todas las claves del localStorage
        Object.keys(localStorage).forEach(function(key) {
          // Obtener el valor asociado a la clave
          var data = JSON.parse(localStorage.getItem(key));
          
          // Crear una opción para cada valor en el localStorage
          var option = document.createElement("option");
          option.value = key; // El valor de la opción es la clave del localStorage
          option.textContent = data.name + ': ' + data.campus; // Concatenar name y campus
          
          // Agregar la opción al elemento <select>
          select.appendChild(option);
        });
      });








  
  
  }


 // Object.keys(localStorage).forEach(key => console.log(key, ":", localStorage[key]));  var x = document.createElement("SELECT");//crea un select en la variable x
   /* x.setAttribute("id", "mySelect");// se le asigna el id y el nombre
    document.body.appendChild(x);//aparece desplegado
  
    var z = document.createElement("option");// z como una opcion 
    z.setAttribute("value", "volvocar");// le asigna el contenido id y myselect
    var t = document.createTextNode("Volvo");//le asigna el valor del textao a la variable t
    z.appendChild(t);//despliega el identificador con en texto
    document.getElementById("mySelect").appendChild(z);//lo despliega en el documento
     */