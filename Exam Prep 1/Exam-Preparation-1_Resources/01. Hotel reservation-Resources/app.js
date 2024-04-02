window.addEventListener("load", solve);

function solve() {
  let nextBtn = document.getElementById("next-btn");
  let reservationInfo = document.getElementById("info-reservations");
  nextBtn.addEventListener("click", createElementList());
  function createElementList() {
    let li = document.createElement("li").classList.add("info-reservations");
    //   li.textContent=
    reservationInfo.appendChild(li);
  }
}
