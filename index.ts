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





//7.





//8.





//9.





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





