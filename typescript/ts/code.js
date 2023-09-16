var nombre = "miguel"; // le estamos diciendo al TS que solo acepte tring para la variable nombre
var numero = 90;
var bool = true;
// podemos decirle al TS que puede aceptar todo tipo de informacion:
var todo = "asdf";
// podemos definir un array donde puede ir de todo
var miArray = ["asdf", 1, true];
// un array de texto
var arrayTexto = ["hola", "chao"];
// definir la estructura de un array
var arrayPersonalizado = ["hola", true, 1];
// que se puede repitir la estructure del array
var arrayQueSeRepite = [['hola', true, 1], ['hola', true, 1]];
//datos vacios
var vacio = undefined; // significa que no va a tener ningun tipo de dato por ahora
var nulo = null; // tambien podemos definir un nulo
var indefinido = undefined;
function mifuncion(nombre, edad) {
    if (nombre == "alejandra" && edad == 12) {
        return true;
    }
    else {
        return false;
    }
}
console.log(mifuncion("enrique", 23));
function hogwarts(infoHechizo) {
    console.log(infoHechizo);
}
hogwarts({ hechizo: 'flipendo', varita: ["madera roble", "12 cm", 5] });
var embrujo = { hechizo: 'flipendo', varita: ["madera roble", "12 cm", 5] };
// en oop, ts incluye los atributos privados, publicos, etc...
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, numero_documento, hechizo) {
        this.nombre = nombre;
        this.correo = correo;
        this.numero_documento = numero_documento;
        this.hechizo = hechizo;
    }
    Usuario.prototype.verNumeroDoc = function () {
        return this.numero_documento;
    };
    return Usuario;
}());
var objUsuario = new Usuario('Julian', "julian@correo", "1234567", embrujo);
// si tratamos de hacerle console log al correo o al numero no vamos a poder
// tendriamos que hacer lo siguiente
console.log(objUsuario.verNumeroDoc());
