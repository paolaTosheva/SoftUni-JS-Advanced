function deleteByEmail() {
  let email = document.getElementsByName("email")[0].value; //gets the first element
  let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
  for (let td of secondColumn) {
    if (td.textContent == email) {
      let row = td.parentNode; //<tr>
      row.parentNode.removeChild(row); //remove <tr> from <tbody>
      document.getElementsByName("email")[0].value = "";
      document.getElementById("result").textContent = "Deleted.";
      return;
    }
  }
  document.getElementById("result").textContent = "Not found.";
}
