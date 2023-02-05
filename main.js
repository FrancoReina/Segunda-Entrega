var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const usuarioDuenio = "franco";
const contraseñaDuenio = "reina";

let usuario = prompt("Por favor ingresa el usuario");
let contrasenia = prompt("Por favor ingresa la contraseña");

if (usuario === usuarioDuenio && contrasenia === contraseñaDuenio){
    alert ("Bienvenido " + usuarioDuenio + " a nuestro calculador salarial"); 

    let empleados = parseInt(prompt("Por favor ingresa la cantidad de empleados"));

for ( i = 0 ; i < empleados ; i++) {
    let nombre = prompt("Por favor ingresa el nombre del empleado");
    let apellido = prompt("Por favor ingresa el apellido del empleado");
    let salario = parseInt(prompt("Por favor ingresa el salario"));
    let aumento = parseInt(prompt("Por favor ingresa el porcentaje del aumento a realizar"));
    let nuevoSalario = salarioAumentado (salario,aumento)

    alert ("El nuevo salario de " + nombre + " es " + " $" + nuevoSalario)
}
} else {
    alert ("usuario o contraseña incorrecta, volve a intentar");
    
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function salarioAumentado (salario,aumento) {
    let ajusteSalarial = salario * (aumento/100) 
    let salarioAumentado = ajusteSalarial + salario
    return salarioAumentado
    }; 
