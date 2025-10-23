// 🪙 Función 1: Formatear número como precio según el código de moneda
function mostrarPrecio(valor, codigoMoneda) {
  try {
    const formato = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: codigoMoneda,
      minimumFractionDigits: 2
    });
    return formato.format(valor);
  } catch {
    return "Código de moneda no válido o formato incorrecto.";
  }
}

// Ejemplos de uso
console.log(mostrarPrecio(9876543.21, "USD")); // Ejemplo en dólares
console.log(mostrarPrecio(9876543.21, "EUR")); // Ejemplo en euros



// 🔢 Función 2: Extraer números del texto, calcular promedio y contar cuántos superan el promedio
function procesarTexto(texto) {
  const coincidencias = texto.match(/\d+(\.\d+)?/g);
  
  if (!coincidencias) {
    console.log("No se detectaron números en el texto proporcionado.");
    return;
  }

  const listaNumeros = coincidencias.map(n => Number(n));
  const promedio = listaNumeros.reduce((a, b) => a + b, 0) / listaNumeros.length;
  const mayoresPromedio = listaNumeros.filter(n => n > promedio).length;

  console.log(`Valores encontrados: ${listaNumeros.join(", ")}`);
  console.log(`Promedio: ${promedio.toFixed(2)}`);
  console.log(`Cantidad de valores superiores al promedio: ${mayoresPromedio}`);
}

// Ejemplo de uso
procesarTexto("Hay 12 árboles, 25 flores, 8 piedras y 30 aves.");



// 📅 Función 3: Validar una fecha y convertirla a timestamp
function comprobarFecha(cadenaFecha) {
  const partes = cadenaFecha.split("-");
  if (partes.length !== 3) {
    console.log("Formato incorrecto. Usa el formato: YYYY-MM-DD.");
    return;
  }

  const [año, mes, dia] = partes.map(Number);
  
  const fecha = new Date(año, mes - 1, dia);

  const mesValido = mes >= 1 && mes <= 12;
  const diaValido = dia >= 1 && dia <= new Date(año, mes, 0).getDate();

  if (!mesValido || !diaValido || isNaN(fecha)) {
    console.log("La fecha introducida no es válida.");
  } else {
    console.log(`Fecha válida ✅ Timestamp: ${Date.parse(fecha)}`);
  }
}

// Ejemplo de uso
comprobarFecha("2025-10-22"); // Fecha válida
comprobarFecha("2025-15-05"); // Fecha inválida
