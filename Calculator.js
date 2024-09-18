let a = "";
function store(s){
    a = a + s;
    document.querySelector('.display').value = `${a}`;
}
function Clear() {
    a = "";
    document.querySelector(".display").value = a;
}
function answer() {
    document.querySelector('.display').value = `${eval(a)}`;
    a = "";
}
function BackSpace() {
    a = a.slice(0, -1);
    document.querySelector(".display").value=a;
}