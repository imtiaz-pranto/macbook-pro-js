//Getting value as number
function getValue(valueElement) {
  const getValueElement = document.getElementById(valueElement);
  const valueText = getValueElement.innerText;
  const valueAmount = parseFloat(valueText);
  return valueAmount;
}
let bestPrice = getValue("best-price");
let memoryPrice = getValue("memory-price");
let storagePrice = getValue("storage-price");
let delivaryPrice = getValue("delivary-price");

//calculation
function priceCalculation() {
  let bestPrice = getValue("best-price");
  let memoryPrice = getValue("memory-price");
  let storagePrice = getValue("storage-price");
  let delivaryPrice = getValue("delivary-price");
  const totalPrice = bestPrice + memoryPrice + storagePrice + delivaryPrice;
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("final-amount").innerText = totalPrice;
}

function setValue(optionBtn, price, setTarget, clickState) {
  document.getElementById(optionBtn).addEventListener("click", function () {
    document.getElementById(setTarget).innerText = price;
    priceCalculation();
    clickState = false;
  });
}

setValue("memory-16gb", 180, "memory-price", true);
setValue("memory-8gb", 0, "memory-price", true);

setValue("storage-256gb", 0, "storage-price", true);
setValue("storage-512gb", 100, "storage-price", true);
setValue("storage-1tb", 180, "storage-price", true);

setValue("delivary-free", 0, "delivary-price", true);
setValue("delivary-paid", 20, "delivary-price", true);

//promo code
document
  .getElementById("promo-box")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "stevekaku") {
      console.log("applied");
      let originalPrice = getValue("total-price");
      const finalPrice = (originalPrice / 100) * (100 - 20);
      document.getElementById("final-amount").innerText = finalPrice;
    } else {
      let originalPrice = getValue("total-price");
      document.getElementById("final-amount").innerText = originalPrice;
      console.log("not applied");
    }
  });
