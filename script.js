function convertCurrency() {
    const amountElement = document.getElementById("amount");
    const resultElement = document.getElementById("result");
    const amount = parseFloat(amountElement.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Replace 'YOUR_APP_ID' with your Open Exchange Rates API key
    const apiKey = 'fd975f61720d92184fb73984';
    const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates.EUR;
            const convertedAmount = amount * exchangeRate;
            resultElement.textContent = `${amount} EUR is approximately ${convertedAmount.toFixed(2)} USD`;
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
            resultElement.textContent = "Error fetching exchange rates. Please try again later.";
        });
}
