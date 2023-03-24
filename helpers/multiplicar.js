
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    if(!Number(base)) {
        throw('La base no es un número'.red);

    }
    if(!Number(hasta)){
        throw('Hasta no es un numero'.red);
    }

    let salida, consola = '';
    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i} \n`;
        consola += `${base} x ${i} = ${base * i} \n`.blue;
    }
    
    
    
    if(listar === true){
        console.log('===================== \n'.rainbow, '   Tabla del: '.blue, base, ' \n', '====================='.rainbow);
        console.log(consola);
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
    return `tabla-${base}.txt`;



}

module.exports = {
    crearArchivo
}

