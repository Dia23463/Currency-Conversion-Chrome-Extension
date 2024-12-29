const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey = "5ienpUPJq0O/G+jatfI3GQ==50o8IpYjk39B1B0J";
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair="

convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url_construct = currencyTotal + "_GBP";
    const url = apiUrl + url_construct;

    fetch(url, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json()) // Use parentheses instead of curly braces
    .then(data => {
        console.log(data); // Use console.log to debug
        const rate = data.exchange_rate;
        const resultAmount = amountTotal * rate;
        result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultAmount.toFixed(2)} GBP`; // Use backticks for template literals
    })
    .catch(error => {
        console.error('Request Failed', error); // Use parentheses for console.error
        result.innerHTML = 'An error occurred, please try again'; // Fix typo in error message
    });
})