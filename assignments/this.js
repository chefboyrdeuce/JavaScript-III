/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. The principle of Implicit Binding is that whenver a function is invoked using dot notation, the object before the dot is 'this'.

* 2. The principle of Explicit binding occurs when .call(), .apply(), or .bind() are used on a function.

* 3. New biding is whenever a function invoked with the 'new' keyword, the 'this' keyword is bound to the new object being contructed.

* 4. Window binding occurs when none of the other principles apply, in which case the 'this' keyword defaults to the window object (unless in 'strict mode').

* write out a code example of each explanation above
*/

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// code example for Explicit Binding

jerry.speak.call(newman); newman.speak.apply(jerry);