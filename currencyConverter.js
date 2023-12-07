const axios = require('axios');
//  for running code in html and node envioment


// Function for gettting the currency conversation rates


const conversionRate = async(fromCurrency, toCurrency)=>{
    const response = await axios.get("https://v6.exchangerate-api.com/v6/722076cb548fbaa301bc549e/latest/USD");
    const rates = response.data.conversion_rates;       // only get the rates wihtout the additional Data
    const usd = parseFloat(1/rates[fromCurrency]);           // gets the curency conversion rate/USD for selected currency
    console.log(usd)
    const exchangedAmount = parseFloat(usd * rates[toCurrency])
    return exchangedAmount;
}
// function for getting the ful country names


const getCoutries = async (toCurrency) =>{
    var cont = require("./currencies.json")

    console.log(cont[toCurrency]["symbolNative"])
    console.log(cont[toCurrency]["name"])

}


// now need to add ocde that checks and adds the currency symbol to the conversion and tells the name of cuntries
// multiply the toal amount and calling both function need to make 


// conversionRate("PKR","PKR");
getCoutries("EUR")