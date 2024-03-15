// This task is about the so - called "methods", i.e.a function inside an Object.
// const object = {
//     method: function() {
// console.log("Hello, I'm a method!");
//     }
// };
//OR SHORTHAND:
// const object = {
// method() {
// console.log("Hello, I'm a method!");
//     }
// };

// object.method(); // prints "Hello, I'm a method!"

// object.method(); // prints "Hello, I'm a method!"
//OR another shorthand is the first way we solved the task. (with the function arrow: ()=>{}):

// function solution() {
//   let str = ""; //a string is inside its context - a scope where it can be accessed through commands.
//   return {
//     append: (s) => (str += s),
//     removeStart: (n) => (str = str.substring(n)),
//     removeEnd: (n) => (str = str.substring(0, str.length - n)),
//     print: () => console.log(str),
//   };
// }

// SOURCE: https://www.tutorjoes.in/JS_tutorial/function_inside_object_in_javascript#:~:text=These%20functions%20are%20called%20%22methods,)%3B%20%7D%20%7D%3B%20object.
function solution() {
  let innerString = "";
  return {
    append(string) {
      innerString += string;
    },
    removeStart(n) {
      innerString = innerString.substring(n);
    },
    removeEnd(n) {
      innerString = innerString.substring(0, innerString.length - n);
    },
    print() {
      console.log(innerString);
    },
  };
}
let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
console.log("--------------");
let secondZeroTest = solution();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

//We could also use a cosntructor function if we had new in front ot the call of the function.
//P.S. invoking is when we take a value from a function. When it's the function itself, we CALL it.
// function StringManipulator() {
//     this.internalString = '';

//     this.append = function(string) {
//         this.internalString += string;
//     };

//     this.removeStart = function(n) {
//         this.internalString = this.internalString.substring(n);
//     };

//     this.removeEnd = function(n) {
//         this.internalString = this.internalString.substring(0, this.internalString.length - n);
//     };

//     this.print = function() {
//         console.log(this.internalString);
//     };
// }

// // Example usage:
// let firstZeroTest = new StringManipulator();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print(); // Should log: 'loa'

// let secondZeroTest = new StringManipulator();

// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print(); // Should log: '34'
