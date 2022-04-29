class Animals {

  //* static method
  static isAnimals(obj){
    return obj instanceof this;
  }

  //* static fields ...?
  static maxAge = 200;
  static maxWeight = 1000;

  //* fields
  constructor(age, name, weight, limbAmount){
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  move(){
    console.log('I can move');
  }
  say(){
    console.log('I can say');
  }
  eat(){
    console.log('I can eat');
  }

  //* гетери і сетери:

  // getAge(){
  //   return this.age;
  // }
  // setWeight(){

  // }
}

class Mammals extends Animals{

  static isMammals(obj){
    return obj instanceof this;
  }
}

class Birds extends Animals{

  static isBirds(obj){
    return obj instanceof this;
  }

  move(){
    console.log('I can fly');
  }
  say(){
    console.log('I can crya');
  }
}
const goose = new Birds(2, 'Mikola', 5, 4);
const duck = new Birds(3, 'Vasil', 4, 4);
console.log(goose);
duck.say();
console.log(Mammals.isMammals(duck));

class Fish extends Animals{

  static isFish(obj){
    return obj instanceof this;
  }

  move(){
    console.log(`${this.name} can swim`);
  }
  say(){
    console.log('I can not say');
  }
}
const guppies = new Fish(1, 'Dora', 0.001, 5);
const tuna = new Fish(15, 'Marlin', 200, 5);
guppies.move();

class Predators extends Mammals{
  move(){
    console.log('I can run');
  }
}

class Whales extends Mammals{}

class Primates extends Mammals{}

class Dogs extends Predators{

  constructor(age, name, weight, limbAmount, color){
    //* super - наслідування параметрів полів конструктора або методів від батьківського класу(коли однакова назва параметру).
    super(age, name, weight, limbAmount);
    // this.name = name;
    this.color = color;
  }
  say(){
    console.log('I can gav');
  }
}
const taksa = new Dogs(3, 'Dobby', 8, 4, 'brown');
const labrador = new Dogs(8, 'Dilmah', 30, 4, 'yellow');
taksa.eat();
console.log(taksa);

class Dolphin extends Whales{
  say(){
    console.log('I can sing');
  }
}

class Human extends Primates{
  move(){
    console.log('I can go');
  }
}
const man = new Human(33, 'John', 80, 4);
const woman = new Human(25, 'Mila', 55, 4);







 
  


