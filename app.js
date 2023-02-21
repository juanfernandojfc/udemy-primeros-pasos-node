// programa que crea un archivo txt con la tabla del 5 utilizando fs("file system") de node 
var colors = require('colors');
const argv = require("./config/yargs");
const multiplicar = require("./helpers/multiplicar")


console.clear();


console.log(argv);


// const base = 5;
multiplicar(argv.b, argv.l, argv.t)
    .then( nombreArchivo => console.log(nombreArchivo , " creado!!!!"))
    .catch( err => console.log("UPS: ",err))


