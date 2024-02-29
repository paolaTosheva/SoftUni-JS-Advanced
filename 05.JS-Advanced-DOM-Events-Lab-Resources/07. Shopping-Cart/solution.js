function solve() {
  let products = Array.from(document.querySelectorAll(".product"));
  let totalPrice = 0;
  let list = [];
  products.forEach((product) => {
    const name = product.querySelector(".product-title").textContent;
    const price = Number(
      product.querySelector(".product-line-price").textContent
    );

    Array.from(product.querySelectorAll(".add-product")).forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(
          "textarea"
        ).value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        totalPrice += price;
        if (!list.includes(name)) {
          list.push(name);
        }
      });
    });
  });

  document.querySelector(".checkout").addEventListener("click", function () {
    document.querySelector("textarea").value += `You bought ${list.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    Array.from(document.querySelectorAll(".add-product")).forEach(
      (button) => (button.disabled = true)
    );
    document.querySelector(".checkout").disabled = true;
  });
}
