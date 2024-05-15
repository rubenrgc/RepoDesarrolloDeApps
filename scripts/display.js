function displayCards() {
  let card = "";

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    card += `<div class='student'>
    <h4> Nombre: ${student.name}</h4> 
    <p> Edad: ${student.age}</p> 
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
  document.getElementById("studentList").innerHTML = card;
}

function displayTable() {

let tableContent = 
`<table>
<thead>
  <tr>
    <th>
      Nombre</th>
      <th>Edad</th>
      <th>Género</th>
      <th>Email</th>
      <th>Password</th>
      <th>Materia 1</th>
      <th>Materia 2</th>
      <th>Materia 3</th>
      <th>Facultad</th>
      <th>Acción</th>
      </tr>
      </thead>
      <tbody>`;

for (let i = 0; i < students.length; i++) {

let student = students[i];
    tableContent += 

`<tr>
      <td>${student.name}</td> 
      <td>${student.age}</td> 
      <td>${student.gender}</td> 
      <td>${student.email}</td> 
      <td>${student.password}</td> 
      <td>${student.materia1}</td> 
      <td>${student.materia2}</td> 
      <td>${student.materia3}</td> 
      <td>${student.facultad}</td> 
      <td><button onclick="eliminarEstudiante(${i})">Eliminar</button></td>
    </tr>`;
  
 
}

tableContent += 

"</tbody></table>";
document.getElementById("studentList").innerHTML = tableContent;
}
  


