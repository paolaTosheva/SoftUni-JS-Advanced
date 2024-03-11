// function currencyFormatter(separator, symbol, symbolFirst, value) {
//   let result = Math.trunc(value) + separator;
//   result += value.toFixed(2).substr(-2, 2);
//   if (symbolFirst) return symbol + " " + result;
//   else return result + " " + symbol;
// }
// function createFormatter(separator, symbol, symbolFirst, formatter) {
//   //higher-order either takes a f() as an argument or returns f() as a result
//   debugger;
//   return function (value) {
//     return formatter(separator, symbol, symbolFirst, value);
//   };
// }
// let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
// console.log(dollarFormatter(5345)); // $ 5345,00
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709)); // $ 2,71
// let levFormatter = createFormatter(",", "lv.", false, currencyFormatter);
// console.log(levFormatter(5345)); // $ 5345,00
// console.log(levFormatter(3.1429)); // $ 3,14
// console.log(levFormatter(2.709)); // $ 2,71
// let myFormatter = createFormatter("!", "K", false, function (a, b, c, d) {
//   console.log(a, b, c, d);
//   return "placeholder";
// });
// console.log(myFormatter(23));
// //declarations vs. expressions

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
}
function createFormatter(separator, symbol, symbolFirst, formatter) {
  //val4 = currencyFormatter
  return function (value) {
    //returning a function creates a closure. It can be either anonymous or not. Names make it easier to debug - that's all.
    //The closure allows the anonymous function to remember and access the environment (variables, parameteres, and functions) in which it was created, even after the outer function has finished executing.
    return formatter(separator, symbol, symbolFirst, value);
  };
}
let dollarFormatter = createFormatter(",", "$", true, currencyFormatter); //expression
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71
//dollarFormatter starts of as a variable but has a function assigned to it.
//function declaration (what I did with function createFormatter) vs. function expression(what we have here - expressions are not hoisted)
