function displayCards{
let card="";

for(let i=0;i<2;i=++) {
    console.log(students[i])
    let student=students[i];
    card+=`
    <div class='student'>
    <h4> Nombre: ${student.name}</h4>
    <p> Edad: ${student.age}</p>
    <p> Genero: ${student.gender}</p>
    <p> Email: ${student.email}</p>
    <p> Password: ${student.password}</p>
    <p> Materia 1: ${student.materia1}</p>
    <p> Materia 2: ${student.materia2}</p>
    <p> Materia 3: ${student.materia3}</p>
    <p> Facultad : ${student.Facultades}</p>
  
    <button>Eliminar</button>
    </div>
    `;
    }

document.getElementById("studentList").innerHTM=card;

}

