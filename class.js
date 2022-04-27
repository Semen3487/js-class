class animals {

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

class mammals extends animals{

  static isMammals(obj){
    return obj instanceof this;
  }
}

class birds extends animals{

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
const goose = new birds(2, 'Mikola', 5, 4);
const duck = new birds(3, 'Vasil', 4, 4);
console.log(goose);
duck.say();
console.log(mammals.isMammals(duck));

class fish extends animals{

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
const guppies = new fish(1, 'Dora', 0.001, 5);
const tuna = new fish(15, 'Marlin', 200, 5);
guppies.move();

class predators extends mammals{
  move(){
    console.log('I can run');
  }
}

class whales extends mammals{}

class primates extends mammals{}

class dogs extends predators{

  constructor(name, color){
    //* super - наслідування параметрів полів конструктора або методів від батьківського класу(коли однакова назва параметру).
    super(name);
    this.name = name;
    this.color = color;
  }
  say(){
    console.log('I can gav');
  }
}
const taksa = new dogs(3, 'Dobby', 8, 4);
const labrador = new dogs(8, 'Dilmah', 30, 4);
taksa.eat();

class dolphin extends whales{
  say(){
    console.log('I can sing');
  }
}

class human extends primates{
  move(){
    console.log('I can go');
  }
}
const man = new human(33, 'John', 80, 4);
const woman = new human(25, 'Mila', 55, 4);







 
  


