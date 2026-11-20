# Bikram-typescript

Mis 20 ejercicios de TypeScript del bootcamp Full Stack de The Bridge. Empiezan con tipos básicos y terminan con genéricos, clases y funciones `async`. Todo el código está en `index.ts`.

## Qué he resuelto

- **1.** Variables con tipo (`string`, `number`, `boolean`). Dejé comentado qué pasa si intento meter un texto en `edad`.
- **2.** `sumarPrecios(precios: number[])`: suma un array de precios con un bucle `for`.
- **3.** `presentar(nombre, apellido?)`: el apellido es opcional y la función saluda con él o sin él.
- **4.** `calcularDescuento(precio, porcentaje)`: devuelve el precio con el descuento aplicado.
- **5.** `mostrarId(id: string | number)`: si le llega texto lo pasa a mayúsculas, y si le llega un número le pone dos decimales con `toFixed(2)`.
- **6 y 7.** El tipo `Producto`, con `descripcion` opcional, y la función `mostrarProducto`.
- **8.** El tipo `EstadoTarea`, que solo acepta `"pendiente"`, `"en-proceso"` o `"completada"`.
- **9 y 10.** Las interfaces `Persona` y `Libro`. Recorro un array de libros y saco solo los disponibles.
- **11.** `buscarUsuario(id)` devuelve `string | undefined`, y compruebo el resultado antes de usar `toUpperCase()`.
- **12.** Una variable `unknown` que solo trato como texto después de comprobar `typeof dato === "string"`.
- **13 a 15.** Tipos de utilidad: `Partial`, `Pick`, `Omit`, `Required` y `Readonly`.
- **16.** La clase `CuentaBancaria`, con el saldo `private`. `ingresar()` rechaza cantidades negativas o cero.
- **17.** La interfaz `Reproducible`, que implementan dos clases: `Cancion` y `Video`.
- **18.** Un `enum EstadoPedido` con tres estados y una función que devuelve un mensaje para cada uno.
- **19.** La función genérica `primero<T>()`, que devuelve el primer elemento de un array de cualquier tipo, o `undefined` si está vacío.
- **20.** Un `Record<string, number>` con notas de alumnos y una función `async` que devuelve quién tiene la nota más alta.

## Cómo ejecutarlo

El repo no tiene `package.json`. La forma más rápida es `tsx`, que ejecuta TypeScript sin compilarlo antes:

```bash
npx tsx index.ts
```

También puedes compilarlo a JavaScript y ejecutarlo con Node:

```bash
npx tsc --target es2020 index.ts
node index.js
```

Los resultados salen por consola.
