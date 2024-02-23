function addItem() {
  let text = document.getElementById("newItemText").value;
  if (text.length === 0) {
    return;
  }
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  document.getElementById("items").appendChild(li);
  let a = document.createElement("a");
  a.textContent = "[Delete]";
  a.href = "#";
  li.appendChild(a);
  document.getElementById("newItemText").value = "";
  a.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });
}
// function addItem() {
//   let text = document.getElementById("newItemText").value;
//   let li = document.createElement("li");
//   if (text.length === 0) {
//     return;
//   }
//   li.appendChild(document.createTextNode(text));
//   document.getElementById("items").appendChild(li);
//   let a = document.createElement("a");
//   a.textContent = "[Delete]";
//   a.href = "#";
//   li.appendChild(a);
//   document.getElementById("newItemText").value = "";
//   a.addEventListener("click", function () {
//     li.parentNode.removeChild(li);
//   });
// }
