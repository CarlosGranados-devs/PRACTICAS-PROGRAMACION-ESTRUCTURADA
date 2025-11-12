const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Crear array de objetos con productos
let inventario = [
  { nombre: "Camisa", precio: 15.00, cantidad: 10 },
  { nombre: "Pantalón", precio: 25.00, cantidad: 5 },
  { nombre: "Zapatos", precio: 40.00, cantidad: 0 },
  { nombre: "Gorra", precio: 8.00, cantidad: 12 },
  { nombre: "Falda", precio: 18.00, cantidad: 3 }
];

// 2. Mostrar productos disponibles
function mostrarDisponibles() {
  console.log("\n📦 Productos disponibles en inventario:\n");
  inventario.forEach((producto) => {
    if (producto.cantidad > 0) {
      console.log(`- ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.cantidad}`);
    }
  });
}

// 3. Calcular el valor total del inventario
function calcularValorTotal() {
  let total = 0;
  for (let producto of inventario) {
    total += producto.precio * producto.cantidad;
  }
  return total;
}

// 4. Buscar un producto por nombre
function buscarProducto(nombreBuscado) {
  let productoEncontrado = inventario.find(
    (producto) => producto.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  );

  if (productoEncontrado) {
    console.log(`\n🔍 Producto encontrado:`);
    console.log(`Nombre: ${productoEncontrado.nombre}`);
    console.log(`Precio: $${productoEncontrado.precio}`);
    console.log(`Stock: ${productoEncontrado.cantidad}`);
  } else {
    console.log("\n❌ Producto no encontrado en el inventario.");
  }
}

// Mostrar inventario y valor total
mostrarDisponibles();
console.log(`\n💰 Valor total del inventario: $${calcularValorTotal().toFixed(2)}\n`);

// Pedir al usuario que busque un producto
rl.question("Ingrese el nombre del producto que desea buscar: ", (nombre) => {
  buscarProducto(nombre);
  rl.close();
});
