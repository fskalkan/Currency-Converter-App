# Currency Converter

This application allows users to convert amounts between different currencies using the Free Currency API.

## Usage

1. Open the `index.html` file in your browser.
2. Enter an amount in the first input box.
3. Select the currency you want to convert from and the currency you want to convert to.
4. The converted amount will be displayed in the result input box.

## API Key

To use the Free Currency API, sign up at [Free Currency API](https://app.freecurrencyapi.com/) to obtain your API key.

In the `script.js` file, replace `YOUR-DEFAULT-KEY` in the API URL with your own Free Currency API key:

```javascript
let url = `https://api.freecurrencyapi.com/v1/latest?apikey=YOUR-DEFAULT-KEY&base_currency=${firstCurrencyValue}`;
