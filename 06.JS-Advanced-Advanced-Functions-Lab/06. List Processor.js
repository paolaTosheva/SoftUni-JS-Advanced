function processor(input) {
  let innerCollection = [];
  input.forEach((el) => {
    let [command, string] = el.split(" ");
    // console.log(command);
    // console.log(string);
    if (command === "add") {
      add(string);
    } else if (command === "remove") {
      remove(string);
    } else if (command === "print") {
      print(innerCollection);
    }
  });
  function add(str) {
    innerCollection.push(str);
  }
  function remove(str) {
    innerCollection = innerCollection.filter((el) => el !== str);
  }
  function print(elements) {
    console.log(elements.join(","));
  }
}
processor(["add hello", "add again", "remove hello", "add again", "print"]);
console.log("-----------------");
processor(["add pesho", "add george", "add peter", "remove peter", "print"]);
//CORRECT
//NO OTHER WAY TO DO IT!!!
