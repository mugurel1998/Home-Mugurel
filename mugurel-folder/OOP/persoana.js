class Person{
    name;
    age;
    email;

    constructor(name, myAge, email){
        this.name = name;
        this.age = myAge;
        this.email =email;
    }

    sayHello(){
        console.log(`Hello, I am ${this.name}, nice to meet you!`);
    }

    static hiThere(){
        console.log('hi there');
    }
}

let person1 = new Person("Razvan", 29, "iamqa@gmail.com");
let person2 = new Person("Matei", 41, "madfdfsd@hmail.com");

console.log(person1.age)

class Programmer extends Person{
    #language;
    constructor(name, myAge, email, language){
        super(name, myAge, email);
        this.#language= newLanguage;
    }

    getLanguage(){
        return this.#language;
    }

    setLanguage(newLanguage){
        this.#language= newLanguage;
    }
    sayHello(){
        super.sayHello();
        console.log('And I know '+this.#language);
    }
}

let programmer1= new Programmer('Sorin', 40, "son@gmail.com", 'javascript')
//console.log(programmer1.language)
console.log(programmer1.getLanguage())
programmer1.setLanguage('C#');