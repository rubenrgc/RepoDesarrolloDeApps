
function displayCards(){
   
    let card ="";

for (let i=0; i<students.length; i++) {
    let student=students[i];
    card += `<div class='student'>
    <h4> Nombre: ${student.name}</h4> 
    </p> Edad: ${student.age}</p> 
    <p>  Genero: ${student.gender}</p> 
    <p>  Email: ${student.email}</p> 
    <p>  Password: ${student.password}</p> 
    <p>  Materia 1: ${student.materia1}</p> 
    <p> Materia 2: ${student.materia2}</p> 
    <p>  Materia 3: ${student.materia3}</p> 
    <p> Facultad : ${student.facultad}</p> 
  
    <button>Eliminar</button>
    </div>
    `;
  
}
document.getElementById("studentList").innerHTML=card;


}
function displayTable(){

   card 
   // Datos de ejemplo para la tabla
   
// Función para crear la tabla
function crearTabla(data) {
    var tabla = document.createElement('table');
    var cabecera = tabla.createTHead();
    var filaCabecera = cabecera.insertRow();

    // Crear encabezados de columna
    for (var key in data[0]) {
        var th = document.createElement('th');
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalizar primera letra
        filaCabecera.appendChild(th);
    }

    // Crear filas de datos
    for (var i = 0; i < data.length; i++) {
        var fila = tabla.insertRow();
        for (var key in data[i]) {
            var celda = fila.insertCell();
            celda.textContent = data[i][key];
        }
    }

    return tabla;
}

// Obtener el contenedor y agregar la tabla
var contenedor = document.getElementById('tablaContainer');
contenedor.appendChild(crearTabla(datos));



}
