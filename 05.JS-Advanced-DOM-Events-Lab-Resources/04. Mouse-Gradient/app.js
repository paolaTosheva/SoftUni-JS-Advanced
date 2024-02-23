function attachGradientEvents() {
  let result = document.getElementById("result");
  //the value of result should be rounded down and displayed as percentage
  let gradient = document.getElementById("gradient");
  document.addEventListener("mousemove", gradientMove);
  document.addEventListener("mouseout", gradientOut);
  function gradientMove(event) {
    const gradientBoxWidth = event.target.clientWidth;
    const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
    const percentage = Math.trunc(positionOfTheMouse * 100);
    result.textContent = percentage + "%";
  }
  function gradientOut(event) {}
}
