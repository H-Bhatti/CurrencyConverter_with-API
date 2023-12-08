const axios = require('axios');
//  for running code in html and node envioment


// Function for gettting the currency conversation rates


const conversionRate = async(fromCurrency, toCurrency)=>{
    const response = await axios.get("https://v6.exchangerate-api.com/v6/722076cb548fbaa301bc549e/latest/USD");
    const rates = response.data.conversion_rates;       // only get the rates wihtout the additional Data
    const usd = parseFloat(1/rates[fromCurrency]);           // gets the curency conversion rate/USD for selected currency
    const exchangedAmount = parseFloat(usd * rates[toCurrency])

    if(isNaN(exchangedAmount)){
        throw new Error(`Unable to get ${fromCurrency} and ${toCurrency}`);
    }
    return exchangedAmount;
}
// function for getting the ful country names from local JSON file


const getCoutries = (toCurrency) =>{
    var data = require("./currencies.json")
    if(data[toCurrency] == undefined){
        throw new Error (`unable to get currency data for  ${toCurrency}`)
    }
    return [data[toCurrency]["symbolNative"], data[toCurrency]["name"]]
}


// now need to add ocde that checks and adds the currency symbol to the conversion and tells the name of cuntries
// multiply the toal amount and calling both function need to make 
const convert = async (fromCurrency, toCurrency, ammount)=>{

    const rate = await conversionRate (fromCurrency, toCurrency);
    const symbol = getCoutries(toCurrency)
    const total = (rate * ammount).toFixed(3)
    // console.log(total+" "+symbol[0]," ",symbol[1])
    return `${total} ${symbol[0]}, ${symbol[1]}`;

}

// conversionRate("PKR","PKR");
// this function will call all the relavent functions and catch errors if any
convert("USD", "EUR", 10)
.then((message)=>{
    console.log(message)})
.catch((error)=>{
    console.error(error)
})