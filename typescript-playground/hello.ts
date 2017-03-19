abstract class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public greet = () => {
        return "Hello, " + this.greeting;
    }
}

class Greeter2 extends Greeter { 
    constructor(message: string) { 
        super(message);
    }
    greet2() {
         
        console.log(this.greet());
    }
}

let test = new Greeter2('Luis');
console.log("This is a test")
test.greet2();



//let button = document.createElement('button');
//button.textContent = "Say Hello";
//button.onclick = function() {
   // alert(greeter.greet());
//}
