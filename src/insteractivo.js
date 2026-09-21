import  Readline from "node:readline/promises";
import { stdin as input, stdout as output  } from "node:process";
import { agregarCamper } from "./campers.js";

const rl = Readline.createInterface({input, output});

try {
    console.log('====REGISTRO INTERACTIVO DE CAMPERS (ESM) ======');
    const nombre = await rl.question('¿Nombre del camper? ');
    const stack = await rl.question('¿Stack tecnologico?');

    const guardado = await agregarCamper(nombre, stack);
    console.log(' Registrado en JSON: ', guardado);
} finally {
    rl.close();
}