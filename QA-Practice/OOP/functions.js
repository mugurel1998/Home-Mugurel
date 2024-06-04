// varianta 0
function makeSum(a,b){
    console.log(a+b);
}

//v1- asta se numeste functie anonima
const makeSum5 = function(a,b){
    console.log(a+b);
}

//v2- ex de arrow function 
const makeSum6 = (a,b) =>{console.log(a+b);}

//v3-
const sayHello11 = (name) => {
    console.log('Hello' +name);
}
//v4- daca nu punem acoladele va face return 
const sum9 = (a,b) => a+b;// aici returneaza
console.log(sum9(100,99));// aici afiseaza
// // function Suma2(a,b){
//     return a+b;
// }

makeSum5(2,3);

makeSum(1,2);
makeSum(11,12);

function calcAge(age){
    if(age<18){
        console.log('esti minor');
    
    }else if(age>=65){
        console.log('esti pensionar');
    }else{
        console.log('esti adult')
    }
    
}

calcAge(35);

function sayHello(name){
    console.log("hello, "+ name)
}

sayHello('Valentin');

function Suma2(a,b){
    return a+b;
}

let something = makeSum(10,5);



setTimeout(function(){console.log('hey!')},2000) 

