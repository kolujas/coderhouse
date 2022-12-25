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




// version 1.2

// SEGUNDA ENTREGA

let arr = [];
let nota = 0;
let cont = 1;
let res = 0;

function Alumnos(nombre, nota, res) {


  nombre = prompt("Ingrese su nombre");
  nota = parseFloat(prompt("Ingrese su nota:"))

  validarMayorA10();

  this.nombre = nombre;
  this.nota = nota;
  this.res = res;

  while (cont < 3) {

    nota += parseFloat(prompt("Ingrese su nota:"))
    
    validarMayorA10();

    this.res = nota / 3; 
    
    cont++;
  }

  if (isNaN(this.res)) {
    console.log("Los campos deben ser de formato numérico");
    return false;
  } else if (this.res >= 7) {
    console.log(`Tu promedio es: ${this.res} felicidades sos un héroe!`);
  } else {
    console.log("Tu promedio es: ${this.res} sos un asistente!");
  }
  
}


// validar que no sea mayor a 10

const validarMayorA10 = () =>{
  if (nota > 10) {
    console.log("Los campos deben ser completados por un número válido entre 1 al 10");
    return false;
  }
}


  let alumno = new Alumnos(Alumnos.nombre, Alumnos.res);
  console.log(`Nombre: ${alumno.nombre} - Promedio del alumno: ${alumno.res}`);


// bd

let bd = [{
  "id": 1,
  "nombre": alumno.nombre,
  "promedio": alumno.res,
},
{
  "id": 2,
  "nombre": "Lucas",
  "promedio": 7,
},
{
  "id": 3,
  "nombre": "Sheila",
  "promedio": 7.5
},
{
  "id": 4,
  "nombre": "Leo",
  "promedio": 8
},
{
  "id": 5,
  "nombre": "Kelpi",
  "promedio": 9.5
}
  
]

// Mostrar listado de alumnos

const mostrarListado = () => {

  const nombresBD = bd.map((el) => el.nombre);
  console.log(`Listado de alumnos: ${nombresBD}`);
  
}

mostrarListado();




