function createAndModify(input) {
  let store = {};

  input.forEach((el) => {
    let element = el.split(" ");
    let [command, name] = element;

    if (command === "create" && element[2] && element[2].includes("inherit")) {
      let name = element[1];
      let parentName = element[3];
      createAndInherit(name, parentName);
    } else if (command === "create") {
      create(name);
    }

    if (command === "set") {
      let suppliedName = element[1];
      let key = element[2];
      let value = element[3];
      set(suppliedName, key, value);
    }

    if (command === "print") {
      let nameSupplied = element[1];
      print(nameSupplied);
    }
  });

  function create(name) {
    store[name] = {};
  }

  function createAndInherit(name, parentName) {
    store[name] = Object.create(store[parentName]);
  }

  function set(name, key, value) {
    store[name][key] = value;
  }

  function print(name) {
    let result = [];
    let currentObj = store[name];
    for (let key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        result.push(`${key}:${currentObj[key]}`);
      }
    }

    // If there are inherited properties, add them
    let proto = Object.getPrototypeOf(currentObj);
    while (proto && proto !== Object.prototype) {
      Object.keys(proto).forEach((key) => {
        if (!result.some((entry) => entry.startsWith(`${key}:`))) {
          result.push(`${key}:${proto[key]}`);
        }
      });
      proto = Object.getPrototypeOf(proto);
    }

    console.log(result.join(","));
  }
}

createAndModify([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
