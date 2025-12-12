const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let estudiantes = [];

function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

async function registrarEstudiante() {
    const nombre = await preguntar("Nombre del estudiante: ");
    const edad = parseInt(await preguntar("Edad: "));
    const notasInput = await preguntar("Ingresa las notas separadas por comas: ");
    
    const notas = notasInput.split(",").map(n => parseFloat(n.trim()));
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    const estado = promedio >= 70 ? "Aprobado" : "Reprobado";

    estudiantes.push({ nombre, edad, notas, promedio, estado });
    console.log("\n✨ Estudiante registrado con éxito!\n");
}

function buscarEstudiante() {
    rl.question("Nombre a buscar: ", nombre => {
        const encontrado = estudiantes.find(e => e.nombre.toLowerCase() === nombre.toLowerCase());
        if (encontrado) {
            console.log("\n📌 Estudiante encontrado:");
            console.log(encontrado);
        } else {
            console.log("\n❌ No existe un estudiante con ese nombre.");
        }
        console.log("");
        mostrarMenu();
    });
}

function listarEstudiantes() {
    console.log("\n📋 LISTADO GENERAL:");
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados.\n");
    } else {
        console.log(estudiantes);
        console.log("");
    }
}

async function mostrarMenu() {
    console.log("===== SISTEMA DE GESTIÓN DE ESTUDIANTES =====");
    console.log("1. Registrar estudiante");
    console.log("2. Buscar estudiante por nombre");
    console.log("3. Listado general");
    console.log("4. Salir");

    const opcion = await preguntar("Elige una opción: ");

    switch (opcion) {
        case "1":
            await registrarEstudiante();
            mostrarMenu();
            break;
        case "2":
            buscarEstudiante();
            break;
        case "3":
            listarEstudiantes();
            mostrarMenu();
            break;
        case "4":
            console.log("Saliendo del sistema...");
            rl.close();
            break;
        default:
            console.log("Opción no válida.\n");
            mostrarMenu();
    }
}

mostrarMenu();
