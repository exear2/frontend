function random(min, max){

return Math.floor(Math.random()* (max-min))+min;


}


let res=random(10,1)
let vidas = 3;

let numUsuario= parseInt(prompt('adivine el numero del 1 al 10'));

if (numUsuario==res){

console.log("adivinista");

}else{

console.log("perdiste");

}