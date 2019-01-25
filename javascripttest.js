class Person {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log("Nom Nom Nom!");
    }
    speak() {
        console.log(`${this.name} says hello!`); 
    }
}

class Student extends Person {
    constructor(name) {
        super();
        this.name = name;
    } speak() {
        console.log(`A friendly student named ${this.name} says Hello!`);
    }
}

let adam = new Person("Adam");
adam.eat();
adam.speak();
console.log(adam.name);

let yasmine = new Student("Yasmine");
console.log(yasmine.name);
yasmine.eat();
yasmine.speak();

adam.speak();

let kathy = new Person("Kathy");
kathy.eat();
kathy.speak(); 


let xem = new Student("Xem");
xem.speak();


class Student {
    constructor(name, age, height, computer, course) {
        this.name = name; 
        this.age = age;
        this.height = height;
        this.computer = computer;
        this.course = course;
        this.knowledge = 2;
    } 
   
    sleep() {
        console.log("zzzzz");
    }
    eat() {
        console.log("nom nom nom nom");
    }
    study() {
        this.knowledge++;
    }
    party() {
        this.knowledge--;
    }
    rage(){
        this.computer = false;
    }
}

