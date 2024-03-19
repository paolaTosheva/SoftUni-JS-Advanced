function processor(input) {
  let innerCollection = {};
  input.forEach((el) => {
    let [command, string] = el.split(" ");
    //   console.log(command);
    //   console.log(string);
    if (command === "add") {
      console.log((innerCollection[string] = string));
    }
  });

  console.log();
  //   console.log(innerCollection);
  //   return {
  //     add() {},
  //     remove() {},
  //     print() {
  //       console.log();
  //     },
  //   };
}
processor(["add hello", "add again", "remove hello", "add again", "print"]);
console.log("-----------------");
processor(["add pesho", "add george", "add peter", "remove peter", "print"]);
