class Animal {
  private name: string
  protected sound: string

  constructor(name: string, sound: string){
    this.name = name;
    this.sound = sound;
  }

  public speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  public readonly color: string

  constructor(name: string){
    super(name, 'Woof')
    this.color = 'blue'
  }
  
  public speak(): void {
      console.log(this.sound)
  }
}

const dog = new Dog('Spike')
dog.speak()