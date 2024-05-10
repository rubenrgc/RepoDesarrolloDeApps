let student1 = {


}

let student2 = {
name:"Robert",
age:98,
isStudent: false

}

console.log(student1,student2);

//object constructor

function Student(name,age,isStudent){

    this.name=name;
    this.age=age;
    this.isStudent=isStudent;

}
students.push("Fernanda","Adrian");
students[2]= "fabi";


students.pop();// quita items del arreglo
students.splice(1,1);//quita item especifivco
console.log(students);


let student6 = {
name:"samantha",
age:99,
isStudent:false


}





let student3 = new Student("Fabiola",97,false);
let student4 = new Student("Sergio",96,true);
let student5 = new Student("Fernanda",97,true);
console.log(student3,student4,student5);

//function
function saludar(){

    alert("Welcome");

}


function sumar(a,b){

    let total= a+b;

    for(let i=0;i<total;i++){

        var j=i;

    }

    console.log(j);

    return total;

}

function calcularTaxes(ingresos,egresos){
let subtotal = ingresos-egresos;
let total =subtotal*.02;
document.write(`<p class="container> Tus taxes son: $${total}<p>`);
}
calcularTaxes*(sumar(100,200),sumar(10,8));
calcularTaxes*(sumar(100,300),sumar(50,30));

