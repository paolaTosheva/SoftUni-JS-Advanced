function focused() {
  let inputs = document.querySelectorAll("div input[type='text']");
  for (let input of inputs) {
    input.addEventListener("focus", focus);
    function focus() {
      input.parentElement.classList.add("focused");
    }

    input.addEventListener("blur", function () {
      input.parentElement.classList.remove("focused");
      input.parentElement.style.backgroundColor = "";
    });
  }
}
