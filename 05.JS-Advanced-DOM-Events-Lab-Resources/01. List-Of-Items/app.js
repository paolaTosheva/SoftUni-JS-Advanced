function addItem() {
  let text = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  document.getElementById("items").appendChild(li);
  //clear form
  document.getElementById("newItemText").value = "";
}
//Now I want to create a button
// if the thingy already exists - not to add it :))))
