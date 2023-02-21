const fs = require('fs')
require('colors');
const multiplicacion = (base, listar, limite) => {

    return new Promise((res, rej) => {

        let datos = "";
        if(limite == 10){
            for (let i = 1; i <= 10; i++) {
                datos += (`${base} x ${i}  =  ${base * i} \n`);
                
            }
        }else{
            for (let i = 1; i <= limite; i++) {
                datos += (`${base} x ${i}  =  ${base * i} \n`);
            }
        }
        
        
        if (listar ===true) {
            console.log("||||||||||||||||||||||||||||||||".magenta)
            console.log(`|||||||| TABLA DEL # ${base} ||||||||`)
            console.log("||||||||||||||||||||||||||||||||".magenta)
            console.log(datos);
        }


        fs.writeFile(`./salida/tabla-del-${base}.txt`, datos, (err) => {
            (err)? rej(`Error creando archivo tabla-del-${base}.txt :`,err)
            :res(`tabla-del-${base}.txt`);
        })

    });

}

module.exports = multiplicacion;




