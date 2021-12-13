// Instantiate the Classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the varibles

const form = document.getElementById('form');




// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read currency
    const currencySelect = document.getElementById('currency').value;
    // read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    
    // validate that the selects have something
    if(currencySelect === '' || cryptoCurrencySelect === '') {
     // display an error
     ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
    }else {
        // Query the REST API
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {

                if(currencySelect === 'USD'){
                    ui.displayResult(data.result.data, data.result.data.quote.USD,  currencySelect);
                }else if(currencySelect === 'GBP'){
                    ui.displayResult( data.result.data, data.result.data.quote.GBP, currencySelect);
                }else if(currencySelect === 'EUR'){
                    ui.displayResult( data.result.data, data.result.data.quote.EUR, currencySelect);
                }else if(currencySelect === 'PHP'){
                    ui.displayResult( data.result.data, data.result.data.quote.PHP, currencySelect);
                }
                 
            })
    }
})