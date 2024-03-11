let calculateSquare = function (num) {
  console.log(num * num);
};
calculateSquare(5);
calculateSquare(6);
calculateSquare(36);
calculateSquare(46);
calculateSquare(68);
//the function is less versatile. It does only one thing.
console.log("---------------");
let calculateSquareNew = function (num) {
  return num * num;
};
console.log(calculateSquareNew(6));
console.log(calculateSquareNew(7));
console.log(calculateSquareNew(8));
//the returned value is giving back what is being passed into the function and sends it to the place where the function is called.

//function RECURSION - the function refers to itself. It can call itself.
//outside of function we use the variable to refer to and invoke it.
