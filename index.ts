interface Airplane_interface {
  name:string,
  isFlying:boolean,
  takeOff():void,
  land():void
}

class Airplane implements Airplane_interface {
  name:string
  isFlying:boolean

  constructor(name:string){
    this.name = name;
    this.isFlying = false;
  }
  takeOff(): void{
    this.isFlying = true
  }
  land(): void{
    this.isFlying = false
  }
}

  const airplane1 = new Airplane('hay')
  const airplane2 = new Airplane('rus')

  /* -----------------------------------------------  */
interface Person_interface {
  name:string,
  age:number,
  stomach:Array<string>,
  eat(food:string):void,
  clearFood(food:string):void,
  clearAll():void
}

class Person implements Person_interface {
  name: string;
  age: number;
  stomach: Array<string>;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(food:string): void{
    this.stomach.push(food);
  }
  clearFood(food:string): void{
    const filteredStomach = this.stomach.filter((item:string) => item !== food);
    this.stomach = filteredStomach;
  }
  clearAll(): void{
    this.stomach = [];
  }
}
  
  const men = new Person('Narek', 21);
  men.eat('pizza');
  men.clearFood('pizza');
  men.clearAll();
  
/* -----------------------------------------------  */

interface Baby_interface {
  name:string,
  age:number,
  favoriteToy:string,
  play():string
}

class Baby extends Person implements Baby_interface {
  name: string;
  age: number;
  favoriteToy: string
  
  constructor(name:string, age:number, favoriteToy:string){
    super(name, age);
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
  }
  play(): string{
    return `Playing with ${this.favoriteToy}`
  }
}

const baby = new Baby('Artashes', 21, 'pizza');
baby.eat('shaurma');
baby.eat('qyabab');

console.log(baby);

