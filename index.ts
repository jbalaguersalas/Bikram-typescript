//1.
const nombre: string = "Manuel";
let edad: number = 27;
let activo: boolean = true;
console.log(`${nombre} tiene ${edad} años y se encuentra activo? =${activo}`);

// edad = "veintisiete"  no es una variable de Type y declara como string.

//2.

let precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(precios: number[]): number {
  let total: number = 0;
  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }
  return total;
}

console.log(sumarPrecios(precios));

//3.
function presentar(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola, ${nombre} ${apellido}`;
  } else {
    return `Hola, ${nombre}`;
  }
}

console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));

//4.
function calcularDescuento(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje) / 100;
}

console.log(calcularDescuento(100, 20));
console.log(calcularDescuento(50, 10));

//5.
function mostrarId(id: string | number ): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase())
  } else {
   console.log(id.toFixed(2))
  }
}
mostrarId("blanco-33");
mostrarId(33);


//6.

type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
}
const agua: Producto = {
  nombre: "Agua",
  precio: 1.00,
  descripcion: "Hidrata",
}
const ordenador: Producto = {
  nombre: "Hp",
  precio: 455,
}
//7.

function mostrarProducto(producto: Producto): string {
  return `${producto.nombre} cuesta ${producto.precio}€`;
}
console.log(mostrarProducto(agua));
console.log(mostrarProducto(ordenador));


//8.
type EstadoTarea = "pendiente" | "en-proceso" | "completada";
let estado: EstadoTarea = "pendiente";
console.log(estado);

estado = "en-proceso";
console.log(estado);

estado = "completada";
console.log(estado);

//estado = "cancelada"
// dice que cancelada no es uno de los valores...

//9.
interface Persona { 
  nombre :string, 
  edad: number, 
  ciudad?:string
}

const Miguel: Persona = {
  nombre: "Miquel",
  edad: 24,
  ciudad: "Valencia",
};
const maria: Persona = {
  
}



//10.





//11.





//12.





//13.





//14.





//15.





//16.





//17.





//18.





//19.





//20.





