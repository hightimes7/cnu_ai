class Greeting {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    sayHello() {
        return "Hello " + this.greeting;
    }
}

let tmp = new Greeting("World!!");

console.log(tmp.sayHello());
