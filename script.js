const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-one");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exchange rate and update the DOM
function calculate() {
  const curreny_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch()
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

//event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
