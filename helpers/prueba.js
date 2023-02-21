const book = {
    titulo: "el titulaaa",
    autor : {
        nombreAutor : "alfonso",
        origen :{
            villa: "villa del autor",
            codigo: "1235"
        }
    }
}

const {titulo, autor:{origen: {villa}}} = book; 

console.log("la ciudad es: ", villa);
console.log("el titulo es :", titulo);