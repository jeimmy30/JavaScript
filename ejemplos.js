let nombre = "jeimmy"; //se declaro una variable llamada nombre y se le asigno un valor que podra ir cambianfo si lo cree necesario
    nombre = "carolina";
    nombre = "Andrea";
var apellido = "Rojas"; //se declaro una variable llamada apellido y se le asigno un valor que podra ir cambiando si lo cree necesario
    apellido = "Avella"
const PI=3.1416; //se declaro la constante PI y se asigno un valor que no se podra modificar

let booleano = new boolean(" "); //es un booleano nos devolvera un false porque es una cadena de texto vacia
console.log(booleano.toString()); 

notificacionesActivas(true); //indica que es verdadero
notificacionesActivas(false); //indica que es falso

numero; //esta es una variable que no existe por lo tanto es undefined porque no esta definida
typeof numero; //al ejecutar esta funcion nos devolvera el tipo de dato que es undefined

numero = null; //esto muestra que la variable numero no tiene valor 
typeof numero; //al ejecutar esta funsion nos devolvera que numero es un objeto

"comp" * 3; //el resultado de esta operacion nos devolvera NaN ya que no es un numero
100 / 0; //nos devolvera un infinity y no un error

typeof 2; //devuelve el tipo de dato que es number 

s_objeto = new string ("cadena"); //Crea un obejeto cadena
cadena = string("texto"); //crea una cadena

var sym1 = Symbol(); //se declara una variable cuyo valor es unico 
var sym2 = Symbol("text"); //se declara una variable cuyo valor es unico 
var sym3 = Symbol("text"); //se declara una variable cuyo valor es unico 

Symbol("text") === Symbol("text"); //false

var a = new Object(true); //almacena un obejeto booleano en a
var a = new Object(undefined); //almacena un objeto vacio en a

parseInt("F", 16); //devolvera un entero 
parseFloat("3.14más caracteres"); //nos devuelve un decimal
String(123); //combierte el numero en cadena
Number("3.14"); //combierte una cadena en numero
Number(false); //combertir booleanos a numeros
d = new Date(); //coombierte una fecha en numero
Number(d) 

let arreglo = [1,2,3,4,5]; //se declaro un arreglo que contiene 5 elementos
for(let i = 0;i < arreglo.length; i++){     //se hace el recorrido del arreglo mediante un ciclo
    let elemento = arreglo[i];  //se guarda el elemento del arreglo que estamos recorriendo en una variable 
}

let booleano = new boolean("true"); //literal booleano
console.log(booleano.toString()); 

0, 117  && -345 (decimal, 10); //literal entero decimal
015, 0001 && -077 (octal, 8); //literal entero octal
0x1123, 0x00111 && -0xF1A7 (hexadecimal, 16); //literal entero hexadecimal

3.1415, -3.1E12, .1e12 && 2E-12; //es un literal flotante

var persona = {
    grupoPersonasA: {nombrePersona: "Francisco", edadPersona: "40"}, //literal de objetos
    1: "Carlos"
    };
    
    console.log(persona.grupoPersonasA.edadPersona); // 40
    console.log(persona[1]); // Carlos

var re = new RegExp('ab+c'); //literal RegExp
"Esto es un strting"; //literal string

let edad = 18;
if(edad < 18){  //sentencia if
    console.log("Eres menor de edad");
}else{  //sentencia else
    console.log("Eres mayor de edad");
}

var Animal = "Jirafa";
switch (Animal) {   //sentencia switch
  case "Vaca":
    console.log("Este animal no es una mascota");
  case "Jirafa":
    console.log("Este animal no es una mascota");
  case "perro":
    console.log("Este animal es una mascota");   
case "canario":
    console.log("Este animal es una mascota");
}
console.log("¿Desea saber algo mas?");

try     //captura de errores try-catch
{
    var a = Number(prompt("Introducir un numero"));
    var b = Number(prompt("Introducir otro numero"));

    if(isNaN(a) || isNaN(b))
    {
        throw "Haz colocado un numero invalido";    //captura de errores throw
    }
    alert("El resultado es "+(a+b));
}
catch(error)
{
    alert("Error: "+error);
}

for(let i = 1;i<= 10;i++){  //ciclo for
    console.log(i);
}

let i = 1;
while(i<=10){   //ciclo while
    i++;
    console.log(i);
}

do{     //ciclo do..while
    i++;
    console.log(i);
}while(i<=10)

markLoop:   //el label markLoop identifica al bucle while
while (edad >= 18) {
    console.log("Eres mayor de edad");
}

for (i = 0; i <=10; i++) {  //break, hace que el ciclo finalice en el momento que aparece
    if (i == valor) {
      break;
    }
}

i = 0;  //continue, no termina la ejecucion del bucle y solo se ejecutara cuando i sea igual a 3
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

function propiedades(obj, obj_nombre) { //sentencia for..in
    var resultado = "";
    for (var i in obj) {
      resultado += obj_nombre + "." + i + " = " + obj[i];
    }
    resultado += "<hr>";
    return resultado;
}

let iterable = [5, 10, 15];     //sentencia for..of

for (let value of iterable) {
  value += 1;
  console.log(value);
}

function multiplicacion(number) {   //declaracion de una funcion
    return number * number;
}

multiplicacion(4);  //llamado de una funsion

var nombre = "jeimmy";  //esta variable pertenece al scope global y se puede usar en cualquier parte del codigo

function nombres(){
    var nombre = "carolina";    //esta variable pertenece a un scope local y su ciclo de vida comienza cuando se ejecute la funsion
    console.log(nombre);
}

nombres();
console.log(nombre);

function factorial(num)
{
    if (num < 0) {  //no acepta menores que 0
        return 0;
    }
    else if (num == 0) {    //si recive 0 devuelve 1
        return 1;
    }
    else {
        return (num * factorial(num - 1));  //si es mayor que 0 se llama asi misma
    }
}

function creaFunc() {       //closures
    var nombre = "Camila";
    function muestraNombre() {
      alert(nombre);
    }
    return muestraNombre;
}
  
var miFunc = creaFunc();
miFunc(); 

function cuadrado(numero){  //el parametro es la variable que colocamos en la definicion de la funcion
    return numero * numero;
}

cuadrado(2);    //el argumento es el numero 2 que estamos enviando

var materials = [   //funciones flecha
    'regla',
    'lapiz',
    'borrador',
    'cuaderno'
];
  
console.log(materials.map(material => material.length));

//funciones predefinidas
eval("cadena de texto"); //metodo eval
isFinite(number); //funsion global isFinite
isNaN(testValue); //funsion isNaN, textValue es el valor que se quiere evaluar
parseFloat("texto"); //nos devuelve un valor numerico cuando se les da una cadena como argumento
parseInt("int" [radix]); //analiza la cadena y intenta devolver un entero de la base especificada y el segundo argumento es opcional

objRef = Number(objRef); //permite cambiar una cadena de texto a un numero
objRef = String(objRef); //permite cambiar un numero a una cadena de texto

escape(string); //funsion escape
unescape(string); //funsion unescape

edad = 18; //operador de asignacion 

[a, b] = [1, 2] //asignacion destructurada

console.log(1 == 1); //operador de comparacion donde no se tiene en cuenta el tipo de dato
console.log("1" === 1); //operacion de comparacion donde se tiene en cuenta el tipo de dato
console.log(2 + 3 - 1); //operadores aritmeticos
a1 = 1 == 1 && 2 == 2   //operador logico (AND), regresa true si ambas expresiones son true
o1 = 2 ==3 || 12 == 12  //operador logico (OR), regresa true si solo una de las expresiones es true
n1 = !true   // operador logico (NOT), en este caso regresa false porque esta negando el true

"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");  //operador condicional ternario
delete obj.nombre;  //operador delete
typeof numero; //operador typeof(devuelve el tipo de dato)
<a href="javascript:void(0)">no hace nada</a>   //void, no realiza ninguna accion

var micoche = {marca: "Honda", modelo: "Accord", año: 1998};    //operador in
"marca" in micoche  // devuelve true
"modelo" in micoche // devuelve true

color = new String("verde");    //operador instanceof
color instanceof String     //verdadero

3 + 4 * 5 //operadores de presedencia (sumario), retorna 23
a = b = 5; //operadores de procedencia (asociatividad)

console.log(this.document === document);    //this, devuelve true
super([arguments]); //operador super

var foo = [ 'En', 'un', 'lugar', 'de', 'la', 'Mancha' ]; //operador de propagacion, permite convertir un array en una serie de argumentos para una funsion
console.info( ...foo ); 

var frutas = ['Manzana', 'Banana']; //array
console.log(frutas.length); 

var tablatotal = tabla1.concat( tabla2 ); //metodo array contat()
var a = frutas.indexOf("Kiwi"); //metodo array indexOf ()
var fruta = ["Kiwi", "Limon"]; var energy = fruits.join(); //metodo array join()  
lastIndexOf();  //es igual que el indexOf pero si hay varios repetidos devuelve la posicion del ultimo
var a = frutas.pop();   //metodo array pop()
a = frutas.push("limón");   //metodo array push()
frutas.reverse();   //metodo array reverse()
a = frutas.shift(); //metodo array shift()
var frutas = ["Banana","Orange","Lemon","Apple","Mango"]; var citrus = frutas.slice(1,3);   //metodo array slice()
arrayNumeros.sort("funcion de comparación");    //metodo array sort()
var resultado = fruits.splice(2, 0, "Lemon", "Kiwi");   //metodo array splice()
frutas.toString("Banana","Orange","Lemon","Apple","Mango");  //metodo array toString()
var frutas = ["Banana", "Orange", "Apple"]; frutas.unshift("Lemon”,”Pineapple");    //metodo array unshift()
var str = "lunes,martes,miércoles"; var dias = str.split(",");  //metodo array split

var myArray = new Array(3); //matrices
var miMapa = new Map(); //maps
const mySet = new Set();  //sets

var miAuto = new Object();  //declaracion objetos
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.año = 1969;

miAuto.marca;   //propiedades objetos

class Square extends Polygon {      //constructores
    constructor(length) {
      super(length, length);
      this.name = 'Square';
    }
    get area() {
      return this.height * this.width;
    }
  
    set area(value) {
      this.area = value;
    } 
}

Shape.prototype.move = function(x, y) {     //object.create
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

object.eval("parametros");  //metodos


function Taxi (tipoMotor, numeroPasajeros, carga, velocidad) {  //herencia
    this.tipoMotor = tipoMotor; this.numeroPasajeros = numeroPasajeros;
    this.carga = carga; this.velocidad = velocidad;   
}

const obj = {   //getters y setters
    get prop() {
      return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
};

var i;                              
var obj1 = {a: 1, b: 2, c: true};
var obj2 = {c: true, b: 2, a: 1};
for (i in obj1) {
    console.assert(obj1[i] === obj2[i]);    //comparacion de objetos
}
for (i in obj2) {
    console.assert(obj1[i] === obj2[i]);
}



