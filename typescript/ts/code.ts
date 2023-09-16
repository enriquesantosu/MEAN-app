let nombre: string = "miguel" // le estamos diciendo al TS que solo acepte tring para la variable nombre
let numero: number = 90
let bool: boolean = true

// podemos decirle al TS que puede aceptar todo tipo de informacion:

let todo: any = "asdf"

// podemos definir un array donde puede ir de todo

let miArray: any[] = ["asdf", 1, true]

// un array de texto

let arrayTexto: string[] = ["hola", "chao"]

// definir la estructura de un array

let arrayPersonalizado: [string, boolean, number] = ["hola", true, 1]

// que se puede repitir la estructure del array

let arrayQueSeRepite: [string, boolean, number][] = [['hola', true, 1], ['hola', true, 1]]




//datos vacios
let vacio: void = undefined  // significa que no va a tener ningun tipo de dato por ahora

let nulo: null = null // tambien podemos definir un nulo

let indefinido: undefined = undefined


function mifuncion(nombre: string, edad: number): boolean {
    if (nombre == "alejandra" && edad == 12) {
        return true
    } else {
        return false
    }
}

console.log(mifuncion("enrique", 23))



interface RequestHarryPotter { //estamos declarando nuestro propio tipo de dato
    hechizo: string,
    varita: any[]
}

function hogwarts(infoHechizo: RequestHarryPotter): any {
    console.log(infoHechizo)
}

hogwarts({ hechizo: 'flipendo', varita: ["madera roble", "12 cm", 5] })

let embrujo: RequestHarryPotter = { hechizo: 'flipendo', varita: ["madera roble", "12 cm", 5] }

// en oop, ts incluye los atributos privados, publicos, etc...


class Usuario {
    public nombre: string; // Public: can be accessed and modified
    protected correo: string; // Protected: can be accessed but not modified
    private numero_documento: string; // Private: neither accessed nor modified
    public hechizo: RequestHarryPotter

    constructor(nombre: string, correo: string, numero_documento: string, hechizo: RequestHarryPotter) {
        this.nombre = nombre;
        this.correo = correo;
        this.numero_documento = numero_documento;
        this.hechizo = hechizo;
    }

    verNumeroDoc() {
        return this.numero_documento
    }
}

let objUsuario = new Usuario('Julian', "julian@correo", "1234567", embrujo)

// si tratamos de hacerle console log al correo o al numero no vamos a poder

// tendriamos que hacer lo siguiente

console.log(objUsuario.verNumeroDoc())

