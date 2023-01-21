let arr = [];
let nota = 0;
let cont = 1;
let res = 0;


let nombreAlumno = document.querySelector('#nombreAlumno');
let notaAlumno = document.querySelector('#notaAlumno');
let calcularBtn = document.querySelector('#calcularBtn');

function Alumnos(nombre, nota, res) {

  validarMayorA10();

  this.nombre = nombre;
  this.nota = nota;
  this.res = res;


  notaAlumno.addEventListener("change", () => {
    
    console.log("nota cambiada");
  });


  calcularBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nombre = nombreAlumno.value;
    nota = notaAlumno.value   

    // const input = document.createElement('input')
    // padre.append(input)
    while (cont < 3) {
      nombreAlumno.disabled = true;
      notaAlumno.value = ""
      
      notaAlumno =+ nota.value;
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
      console.log(`Tu promedio es: ${this.res} sos un asistente!`);
    }

    console.log(nombre)
    console.log(this.res)
  })

  

 


  // datos guardados en LS

  localStorage.setItem(this.nombre, this.res);
  var lsData = localStorage.getItem(this.nombre, this.res);
  console.log(lsData)
  
}


// validar que no sea mayor a 10

const validarMayorA10 = () =>{
  if (nota > 10) {
    console.log("Los campos deben ser completados por un número válido entre 1 al 10");
    return false;
  }
}


  let alumno = new Alumnos(Alumnos.nombre, Alumnos.res);
  nombre.innerHTML = `Alumno: ${alumno.nombre}`;
  promedio.innerHTML = `Tu promedio es: ${alumno.res}`;



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


let db = [...bd];



// Mostrar listado de alumnos

const usuariosBtn = document.querySelector('.salonFama');


usuariosBtn.addEventListener("click", () => {
  let listadoUsuarios = db.map(function(user){
    return '<li>' + user.nombre + '</li>';
  })

  document.getElementById('users').innerHTML = listadoUsuarios.join('');
})


