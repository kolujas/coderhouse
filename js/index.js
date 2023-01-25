let arr = [];
let nota = 0;
let cont = 1;
let res = 0;


let nombreAlumno = document.querySelector('#nombreAlumno');
let notaAlumno = document.querySelector('#notaAlumno');
let calcularBtn = document.querySelector('#calcularBtn');
let agregarNotaBtn = document.querySelector('#agregarNota');



// Funcion constructora

function Alumnos(nombre, nota, nota2, nota3, res) {  

  this.nombre = nombre;
  this.nota = nota;
  this.nota2 = nota2;
  this.nota3 = nota3;
  this.res = res;
  

  while (cont < 3) {    
      
    agregarNotaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const input = document.createElement('input')
      input.classList ='form-control mt-4';
      input.placeholder = "Ingresa tu nota";
      document.querySelector('.notaContenedor').append(input);      

      if(cont === 3){
        agregarNotaBtn.disabled = true;
      }

      let inputs = document.getElementsByTagName('input')
      inputs[2].classList.add('nota2') 
      inputs[3].classList.add('nota3') 

      nota2 = document.querySelector('.nota2');
      nota3 = document.querySelector('.nota3');
      

      calcularBtn.addEventListener("click", (e) => {
        e.preventDefault();
        nombre = nombreAlumno.value;
        nota = notaAlumno.value;
        nota2 = nota2.value;
        nota3 = nota3.value;

       // calculo de promedio

        this.res = (Math.floor(nota) + Math.floor(nota2) + Math.floor(nota3)) / 3;
        
       
          if (Math.floor(notaAlumno.value) > 10) {
            console.log("Los campos deben ser completados por un número válido entre 1 al 10");
            return false;
          }
          if(Math.floor(nota2) > 10){
            console.log("Los campos deben ser completados por un número válido entre 1 al 10");
            return false;
          }
          if(Math.floor(nota3) > 10){
            console.log("Los campos deben ser completados por un número válido entre 1 al 10");
            return false;
          }


          // datos guardados en LS

        localStorage.setItem(nombre, this.res);
        var lsData = localStorage.getItem(this.nombre, this.res);
        console.log(lsData)
        
        
    
        if (isNaN(this.res)) {
          console.log("Los campos deben ser de formato numérico");
          return false;
        } else if (this.res >= 7) {
          console.log(`Tu promedio es: ${this.res} felicidades sos un héroe!`);
        } else {
          console.log(`Tu promedio es: ${this.res} sos un asistente!`);
        }
        

        
        const mostrarPromedio = document.querySelector('.tuPromedio');
        console.log(mostrarPromedio);

        mostrarPromedio.innerHTML = `${nombre} tu promedio es ${this.res}`;
        
      })
    
    })
    cont++;    
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
},
{
  "id": 6,
  "nombre": "Pollo",
  "promedio": 7.5
}
  
]


let db = [...bd];



// Mostrar listado de alumnos

const usuariosBtn = document.querySelector('.salonFama');

console.log(usuariosBtn);


usuariosBtn.addEventListener("click", () => {
  let listadoUsuarios = db.map(function(user){
    return '<li>' + user.nombre + '</li>';
  })

  document.getElementById('users').innerHTML = listadoUsuarios.join('');
})


