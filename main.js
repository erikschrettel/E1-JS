// * Usando el Array de pizzas 

let pizzas = [
 {
     id: 1,
     nombre: 'pizza muzzarella',
     precio: 600, 
 }, 
 {
     id: 2,
     nombre: 'pizza de anchoas',
     precio: 800,
 },
 {
     id: 3,
     nombre: 'pizza a la fugazzeta',
     precio: 900,
 },
 {
     id: 4,
     nombre: 'pizza de anana',
     precio: 1000,
 },
 {
     id: 5,
     nombre: 'pizza de rúcula y tomates cherrys',
     precio: 1100,
 },
 {
     id: 6,
     nombre: 'pizza napolitana',
     precio: 700,
 }]


/* Vamos a utilizar el mismo array de objetos "Pizzas" del desafío general anterior. 

Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 
El desafío será, al tocar el botón, capturar el valor ingresado en el input.
Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

 Si no coincide con ningún id, renderizar un mensaje de error.  */


// Trayendo las variables necesarias.
const nombrePizza = document.getElementById('nombrePizza');
const precioPizza = document.getElementById('precioPizza');
const formInput = document.getElementById('formInput');
const inputNumber = document.getElementById('inputNumber');

// Definiendo la lista de pizzas, con respectivo id y precio.

// Funcion para renderizar html

const addingPizza = pizzas => {
    return `<h2>${pizzas.nombre}</h2>`
}

const addingPrecio = pizzas => {
    return `<h4>${pizzas.precio}</h4>`
}

// Logica de la renderizacion

const renderPizzas = pizzasList => {
    nombrePizza.innerHTML = pizzasList.map(pizzas => addingPizza(pizzas)).join('');
}

const renderPrecio = pizzaPrecio => {
    precioPizza.innerHTML = pizzaPrecio.map(pizzas => addingPrecio(pizzas)).join('');
}

// Cancelando el evento por defecto y guardar en una variable, el valor que ingresemos en el input.
const choosePizza = e => {
    e.preventDefault()
    const pizzaName = inputNumber.value.trim();
    if (!pizzaName.length) {
        alert('Por favor, ingresa un número')
        return;
    }

    pizzas = [
 {
     id: 1,
     nombre: 'pizza muzzarella',
     precio: 600, 
 }, 
 {
     id: 2,
     nombre: 'pizza de anchoas',
     precio: 800,
 },
 {
     id: 3,
     nombre: 'pizza a la fugazzeta',
     precio: 900,
 },
 {
     id: 4,
     nombre: 'pizza de anana',
     precio: 1000,
 },
 {
     id: 5,
     nombre: 'pizza de rúcula y tomates cherrys',
     precio: 1100,
 },
 {
     id: 6,
     nombre: 'pizza napolitana',
     precio: 700,
 }];

    inputNumber.value = '';
    renderPizzas(pizzas);
    renderPrecio(pizzas);
};

const init = () => {
    formInput.addEventListener('submit', choosePizza)
}

init();