### Questions

//1. What is object-oriented programming?

//A: Object-oriented programming(OOP) is a programming technique built around objects
//consisted of methods and variables. 4 main characteristics of the OOP are:
//encapsulation, abstraction, inheritance and polymorphism.
//Encapsulation is a concept that a variable and function are bundled together
//into one unit.
//Abstraction is a programming concept to conceal everything except the relevant
//data about an object in order to decrease complexity and increase efficiency.
//Inheritance is a mechanism to allow you to reduce the redundant code by carrying
//over the same code from parent elements to each child element.
//Polymorphism is a mechanism that a solitary task can be achieved in multiple ways.

//2. What is a constructor?

//A: Constructor is a function which serves as a blueprint for creating a same
//type of object.

//3. What is the purpose of the keyword super?

//A: It is a keyword to call and access the parent object.

//4. What are classes that do not use the keyword extends called?

//A: Prototypical inheritance

####Code

var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

class Shirt extends Clothes{
    constructor(){
    super('shirt','S','50');
}
}
