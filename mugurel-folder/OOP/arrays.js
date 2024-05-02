let names = ['Razvan', 'Matei', 'George']

console.log(names.length);

console.log(names[1])

names.unshift('Mircea')

console.log(names)

names.forEach(elem => console.log(elem));
// for(let i =0; i<names.length; i++){
//     console.log(names[i]);
// } in loc de asta facem cu forEach