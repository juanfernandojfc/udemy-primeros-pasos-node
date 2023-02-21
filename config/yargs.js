const argv = require("yargs")
    .options(
        {
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: " numero base para mostrar su tabla de multiplicar"
            },
            'l':{
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: 'false',
                describe: "true = shows list table"
            },
            't':{
                alias: 'top',
                type: 'number',
                demandOption: false,
                default: '10',
                describe: "max number of table to show"
            }
        })
    .argv;

module.exports = argv;