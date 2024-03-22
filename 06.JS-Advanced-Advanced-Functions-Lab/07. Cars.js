// function createAndModify(input) {
//   input.forEach((element) => {
//     let store = {};
//     let [command, name] = element.split(" ");
//     // console.log(command);
//     //   console.log(name);
//     create(name, store);
//     if (command === "create" && element[2] === "inherits") {
//       let name = element[1];
//       let parentName = element[3];
//       createAndInherit(name, parentName);
//     }
//     if (command === "set") {
//       let suppliedName = element[1];
//       let key = element[2];
//       let value = element[3];
//       console.log(key);
//       console.log(value);
//       set(suppliedName, key, value);
//     }
//     if (command === "print") {
//       let nameSupplied = element[1];
//       print(nameSupplied);
//     }
//   });
//   function create(name) {
//     store[name] = {};
//     return store;
//   }
//   function createAndInherit(name, parentName) {
//     create(name);
//     store[parentName] = {};
//     return store;
//   }
//   function set(name, key, value) {
//     if (name == store.name) {
//       store.name[key] = value;
//     }
//     return store;
//   }
//   function print(name) {
//     if (name == store.name) {
//       set(name);
//       for (let [key, value] of Object.entries(store.name)) {
//         console.log(`${key}:${value}`);//?????
//       }
//     }
//   }
// }
// createAndModify([
//   "create c1",
//   "create c2 inherit c1",
//   "set c1 color red",
//   "set c2 model new",
//   "print c1",
//   "print c2",
// ]);

function objectManager() {
  const store = {};

  function create(name, parentName = null) {
    store[name] = parentName ? Object.create(store[parentName]) : {};
  }

  function set(name, key, value) {
    if (store[name]) {
      store[name][key] = value;
    }
  }

  function print(name) {
    if (store[name]) {
      let properties = [];
      let obj = store[name];
      do {
        Object.keys(obj).forEach((key) => {
          // Prevent duplicates if the key was already printed from the object itself or closer ancestor
          if (!properties.find((prop) => prop.startsWith(key + ":"))) {
            properties.push(`${key}:${obj[key]}`);
          }
        });
        obj = Object.getPrototypeOf(obj);
      } while (obj && Object.getPrototypeOf(obj)); // Stop when reaching the top of the prototype chain (Object.prototype)

      console.log(properties.join(","));
    }
  }

  return { create, set, print };
}

function createAndModify(input) {
  const manager = objectManager();

  input.forEach((element) => {
    const [command, name, third, fourth] = element.split(" ");

    if (command === "create") {
      manager.create(name, third === "inherit" ? fourth : undefined);
    } else if (command === "set") {
      manager.set(name, third, fourth);
    } else if (command === "print") {
      manager.print(name);
    }
  });
}

createAndModify([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
