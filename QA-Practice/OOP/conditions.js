const age = 25;

// if(age<18){
//     console.log('esti minor');

// }else{
//     console.log('esti major');
// }

if(age<18){
    console.log('esti minor');

}else if(age>=65){
    console.log('esti pensionar');
}else{
    console.log('esti adult')
}



const today ="monday"

switch(today){
    case 'monday': console.log("yey! e luni!");
    break;
    case 'tuesday': console.log('e marti:')
    break;
    default: console.log('oricare alta zi')
}