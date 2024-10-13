const amountInput = document.querySelector(".firstInput");
const firstCurrency = document.querySelector(".firstCurrency");
const secondCurrency = document.querySelector(".secondCurrency");
const resultInput = document.querySelector(".secondInput");

runEvents();

function runEvents() {
  amountInput.addEventListener("input", exchange);
}

function exchange() {
  let amountInputValue = Number(amountInput.value.trim());

  if (amountInputValue < 0) {
    amountInputValue = 0;
    amountInput.value = 0;
  }

  let firstCurrencyValue =
    firstCurrency.options[firstCurrency.selectedIndex].textContent;
  let secondCurrencyValue =
    secondCurrency.options[secondCurrency.selectedIndex].textContent;

  calculate(amountInputValue, firstCurrencyValue, secondCurrencyValue);
}

function calculate(amountInputValue, firstCurrencyValue, secondCurrencyValue) {
  //! Burada kendi FreeCurrencyAPI anahtarınızı "YOUR-DEFAULT-KEY" yerine yazın.
  let url = `https://api.freecurrencyapi.com/v1/latest?apikey=YOUR-DEFAULT-KEY&base_currency=${firstCurrencyValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let exchangeResult = amountInputValue * data.data[secondCurrencyValue];
      resultInput.value = exchangeResult.toFixed(3);
    })
    .catch((err) => {
      err, alert("API Error!");
    });
}
