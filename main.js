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
    alert (`Bienvenido ${usuarioDuenio}`); 

} else {
    alert ("usuario o contraseña incorrecta, volve a intentar");
}

class Producto {
    constructor(nombre, precio, img) {
        this.nombre = nombre;
        this.precio = Math.round(precio*1.21); 
        this.img = img;
    }
}

const modena = new Producto("Modena", 17000, "modena.jpg");
const venecia = new Producto("Venecia", 15000, "venecia.jpg");
const comodo = new Producto("Comodo", 13500, "comodo.jpg");
const mega = new Producto("Mega", 16499, "mega.jpg");

const arrayProductos = [modena, venecia, comodo, mega];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${producto.img}" class="card-img-top" alt="productos">
                        <div class="card-body">
                        <h5 class="card-title">Nombre: ${producto.nombre} </h5>
                        <p class="card-text">Precio: ${producto.precio} </p>
                        <a href="#" class="btn btn-primary">Añadir al Carrito</a>
                        </div>
                    </div>
                    `;
    contenedorProductos.appendChild(div);
})


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

