// Primera version

// let cont = 0;
// let res = 0;


// calcularPromedio = (nota, nota2, nota3) => {
//   nota = parseFloat(prompt("Ingrese su nota 1:"))
//   nota2 = parseFloat(prompt("Ingrese su nota 2:"))
//   nota3 = parseFloat(prompt("Ingrese su nota 3:"))
//   while (cont === 0) {
//     if (nota > 10) {
//       console.log("Los campos deben ser completados por un número válido entre 1 al 10");
//       return false;
//     }
//     if (nota2 > 10) {
//       console.log("Los campos deben ser completados por un número válido entre 1 al 10");
//       return false;
//     }
//     if (nota3 > 10) {
//       console.log("Los campos deben ser completados por un número válido entre 1 al 10");
//       return false;
//     }

//     res = (nota + nota2 + nota3) / 3;
//     cont++;
//   }

//   validacion()
// }

// validacion = () => {
//   if (isNaN(res)) {
//     console.log("Los campos deben ser de formato numérico");
//   } else if (res >= 7) {
//     console.log("Tu promedio es: " + res + " felicidades sos un héroe!");
//   } else {
//     console.log("Tu promedio es: " + res + " sos un asistente!");
//   }

// }

// calcularPromedio();


// version 1.1

// let cont = 1;
// let res = 0;


// calcularPromedio = (nota) => {

//   nota = parseFloat(prompt("Ingrese su nota"))

//   while (cont < 3) {

//     nota += parseFloat(prompt("Ingrese su nota:"))

//     res = nota / 3;

//     if (res > 10) {
//       console.log("Los campos deben ser completados por un número válido entre 1 al 10");
//       return false;
//     }

//     cont++;
//   }

//   validacion()
// }

// validacion = () => {
//   if (isNaN(res)) {
//     console.log("Los campos deben ser de formato numérico");
//   } else if (res >= 7) {
//     console.log("Tu promedio es: " + res + " felicidades sos un héroe!");
//   } else {
//     console.log("Tu promedio es: " + res + " sos un asistente!");
//   }

// }

// calcularPromedio();



// console.log(pruebini);


// let cont = 1;
// let resultado = 0;
// let ListadoDeAlumnos = [];

// function Alumnos(nombre, resultado) {

//   nombre = prompt("Ingresa tu nombre");
//   nota = parseFloat(prompt("Ingrese su nota:"))

//   while (cont <= 3) {

//     this.nombre = nombre;
//     this.resultado = resultado;

//     nota += parseFloat(prompt("Ingrese su nota:"))


//     resultado = nota / 3;

//     console.log(nota);
//     if (resultado > 10) {
//       console.log("Los campos deben ser completados por un número válido entre 1 al 10");
//       return false;
//     }

//     cont++;
//   }  

// }

// let Alumno = new Alumnos();

// ListadoDeAlumnos.push(Alumno.nombre, Alumno.resultado);

// console.log(ListadoDeAlumnos);



let arr = [];
let nota = 0;
let cont = 1;

function Alumnos(nombre, nota){

  
  nombre = prompt("Ingrese su nombre");
  nota = parseFloat(prompt("Ingrese su nota:"))

  this.nombre = nombre;
  this.nota = nota;
  
  while(cont < 3){
  
    nota += parseFloat(prompt("Ingrese su nota:"))

    res = nota / 3;

    cont++;    
  }

  console.log(res);
  
}

let alumno = new Alumnos(Alumnos.nombre, Alumnos.nota);

console.log(alumno)





