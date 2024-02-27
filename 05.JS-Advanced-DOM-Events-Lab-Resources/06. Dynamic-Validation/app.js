function validate() {
  const input = document.getElementById("email");
  const rightRegExp = new RegExp(/^([a-z]+)@([a-z]+)\.([a-z]+)/);
  //<name>@<domain>.<extension>
  //e.g. nakov@softuni.bg
  input.addEventListener("change", function () {
    if (!rightRegExp.test(input.value)) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  //class "error" if input = false
  //if true ->clear the style
}
