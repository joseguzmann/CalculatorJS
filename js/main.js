'strict mode';

let str = "";
let pantalla = document.getElementById("pantalla");

function add(valor) {
    str = str + valor;
    pantalla.textContent = str;
}

function borrarTodo() {
    str = "";
    pantalla.textContent = str;
}

function retroceder() {
    str = str.slice(0, -1);
    pantalla.textContent = str;
}

function evaluar() {
    pantalla.textContent = eval(str).toFixed(1);
    str = "";
}