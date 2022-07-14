function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  };
}

class Greeter {
  constructor(public greeting: string) {}

  @delay(2000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const person = new Greeter("Eduardo");
person.greet();
