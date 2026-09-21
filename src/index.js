import { agregarCamper, listarCampers, buscarCamperPorNombre } from './campers.js';
const [, , comando, arg1, arg2] = process.argv;
try {
    switch (comando) {
        case 'agregar': {
            const c = await agregarCamper(arg1, arg2);
            console.log('✅ Camper registrado:', c);
            break;
        }
        case 'listar': {
            const lista = await listarCampers();
            if (lista.length === 0) {
                console.log('ℹ️ No hay campers aún.');
            } else {
                console.table(lista);
            }
            break;
        }
        case 'buscar':
            case 'buscar': {
    if (!arg1) {
        console.log(' Debes ingresar un término de búsqueda.');
        break;
    }
    const resultados = await buscarCamperPorNombre(arg1);
    if (resultados.length === 0) {
        console.log(' No se encontraron campers con ese nombre.');
    } else {
        console.table(resultados);
    }
    break;
    }
    case 'buscar': {
        const buscar = await buscarCamperPorNombre(arg1);
        console.table(buscar)
        break;
    }
    default:
            console.log('Uso: node src/index.js [listar | agregar | buscar]');
    }
} catch (err){
    console.error('❌ Error:', err.message);
} 
