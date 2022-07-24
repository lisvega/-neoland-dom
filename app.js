
//Iteración #1: Interacción con el DOM


//1.1 Usa querySelector para mostrar por consola el botón con la clase.showme
const showmeButton = document.querySelector(`.showme`);
//console.log(showmeButton)


//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector(`#pillado`);
//console.log(pillado)

//1.3 Usa querySelector para mostrar por consola todos los p
const parrafo = document.querySelectorAll(`p`);
//console.log(parrafo)

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon = document.querySelectorAll(`.pokemon`);
//console.log(pokemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
//data - function="testMe".
const dataFunction = document.querySelectorAll(`[data-function="testMe"]`);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data - function="testMe".
const testMe = document.querySelector(`[testme=Rick]`);




//-----------------**Iteración #2: Modificando el DOM**--------------------------------------------------

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
//Creamos un elemento en JS, que se inserta en este caso en el body. En consola del chrome hay que revisar en inspeccionar=> elementos*/
const newDiv = document.createElement(`div`);
document.body.appendChild(newDiv);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
//Crear perimero un div y luego creamos un p y luego lo metemos dentro del div con una funcion que ataca a la variable del div*/
const newDivDos = document.createElement(`div`);
document.body.appendChild(newDivDos);
const newP = document.createElement(`p`);
newDivDos.appendChild(newP);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
// Creamos primero un div.
// Luego creamos un loop que contiene la creacion de un p con la ejecucion de insertarlo a un div.*/
const newDivTres = document.createElement(`div`);
document.body.appendChild(newDivTres);



// for (i = 0; i <= 5; i++) {
const newPTres = document.createElement(`p`);
newDivTres.appendChild(newPTres);



//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
/* Creamos la P y luego creamos el texto con la funcion "CreatetexteNode" y se lo insertamos al P con AppendChild"*/
const newPCuatro = document.createElement(`p`);
document.body.appendChild(newPCuatro);

const newtext = document.createTextNode("Soy dinamico!");
newPCuatro.appendChild(newtext);



//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Fn = document.querySelector(".fn-insert-here");
h2Fn.innerHTML = "Wubba Lubba dub dub";



//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

/*for (i = 0; i < 1; i++)*/

// Creamos un UL ,
const newUl = document.createElement("ul");
document.body.appendChild(newUl);
// dentro de ese ul hemos creado un li y ese li le hemos hech el for Each ,
// A este array lo recorremos con un parametro string y por cada uno de los string
// seria el valor que le añadiremos los valores del array de apps.
apps.forEach((string) => {
    let li = document.createElement("li");
    li.innerHTML = string;
    newUl.appendChild(li);
});



//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// !QUERYSELECTOR ALL GENERA UN ARRRAAAAAAAAAAAAAAAAYYYYYYY
const removeItems = document.querySelectorAll(".fn-remove-me");

removeItems.forEach((item) => {
    item.remove();
});



//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.
const newP10 = document.createElement(`p`);

newP10.innerHTML = "Voy en medio";
const divs = document.querySelectorAll("div");
const body = document.querySelector("body");

body.insertBefore(newP10, divs[1]);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
// A traves del Query Selector llamamos al div con la clase .fn-insert-here  para poder trabajarla en js y nos
// devuelve un array con cada div 
const divAll = document.querySelectorAll("div.fn-insert-here");

//Recorremos el array que por cada elemento de nuestra constante divAll creamos e insertamos dentro de una variable 
// el NODO o etiqueta QUE ES LO MISMO con la funcion de js document.createElement 
divAll.forEach((element) => {
    let pText = document.createElement("p");
    //a traves del inner.HTML devolvemos a nuestro html tanto la etiqueta o NODO y el valor que hay dentro de ella que en este 
    //caso es el texto "Voy dentro "
    pText.innerHTML = "Voy dentro";
    //  
    element.appendChild(pText);
});