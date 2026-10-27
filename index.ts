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
function mostrarId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
mostrarId("blanco-33");
mostrarId(33);

//6.

type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
};
const agua: Producto = {
  nombre: "Agua",
  precio: 1.0,
  descripcion: "Hidrata",
};
const ordenador: Producto = {
  nombre: "Hp",
  precio: 455,
};
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
  nombre: string;
  edad: number;
  ciudad?: string;
}

const Miguel: Persona = {
  nombre: "Miquel",
  edad: 24,
  ciudad: "Valencia",
};
const Maria: Persona = {
  nombre: "Maria",
  edad: 42,
};

function mostrarPersona(persona: Persona): void {
  if (persona.ciudad) {
    console.log(
      `${persona.nombre} tiene ${persona.edad}y vive en ${persona.ciudad}`,
    );
  } else {
    console.log(`${persona.nombre} y tiene ${persona.edad}`);
  }
}
mostrarPersona(Miguel);
mostrarPersona(Maria);

//10.
interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}

const libros: Libro[] = [
  { titulo: "Rebeldes", autor: "Miguel-Pardo", paginas: 678, disponible: true },
  { titulo: "Maca", autor: "Pablo-Carceles", paginas: 899, disponible: true },
  { titulo: "Mil", autor: "Celdas-Paredes", paginas: 6767, disponible: false },
];

function estadisponible(libro: Libro): boolean {
  return libro.disponible;
}
console.log("Libros disponibles:");
for (let i = 0; i < libros.length; i++) {
  if (estadisponible(libros[i])) {
    console.log(`${libros[i].titulo} de ${libros[i].autor}`);
  }
}
//11.
function buscarUsuario(id: number): string | undefined {
  if (id === 1) {
    return "Ana";
  } else {
    return undefined;
  }
}
const usuario = buscarUsuario(1);
if (usuario) {
  console.log(usuario.toUpperCase());
} else {
  console.log("no existe");
}

//Prueba con otro usuario
/*const usuario5 =buscarUsuario(5);
if (usuario){
  console.log(usuario.toUpperCase());
}else {
  console.log("no existe")
}
*/

//12.

let dato: unknown = "Hola Mundo";

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("no es un texto");
}

dato = 498;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("no es un texto");
}

//13.

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
};
const cambios: Partial<Usuario> = {
  email: "come@me.com",
};
console.log(cambios);

const resumen: Pick<Usuario, "id" | "nombre"> = {
  id: 467,
  nombre: "Maqueta",
};
console.log(resumen);

//14.

type UsuarioPublico = Omit<Usuario, "email">;

const usuarioPublico: UsuarioPublico = {
  id: 453,
  nombre: "Manuel",
  edad: 23,
};
console.log(usuarioPublico);

//15.
interface Configuracion {
  tema?: string;
  idioma?: string;
}
const configuracionCompleta: Required<Configuracion> = {
  tema: "oscuro",
  idioma: "Ingles",
};
console.log(configuracionCompleta);

const usuarioFijo: Readonly<Usuario> = {
  id: 342,
  nombre: "Manolo",
  email: "com.me@me.com",
  edad: 23,
};

console.log(usuarioFijo);
//usuarioFijo.nombre = "Carlos";
//da error por que hemos puesto que solo se pueda leer y no modificar.

//16.

class CuentaBancaria {
  private saldo: number;

  constructor(saldoinicial: number) {
    this.saldo = saldoinicial;
  }
  ingresar(cantidad: number) {
    if (cantidad <= 0) {
      console.log("ERROR: La cantidad debe ser positiva");
      return;
    }
    this.saldo += cantidad;
  }

  obtenerSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20);
console.log(cuenta.obtenerSaldo());

//17.

interface Reproducible {
  reproducir(): void
}
class Cancion implements Reproducible {
  reproducir(): void {
    console.log("Reproduciendo Hardcore")
  }
 
}
class Video implements Reproducible {
  reproducir(): void {
    console.log("Reproduciendo Video")
  }
  
}

//18.



//19.



//20.

