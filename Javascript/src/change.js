
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = function() {


      var myHeaders = new Headers();
      myHeaders.append("apikey", "tZCaZVtB9kyNe03MOLUaCSkKwLTVqu5X");
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      
      fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=&base=USD", requestOptions)
        .then(response => response.json() )
        .then(data =>{
        const currency = document.querySelector('#currency').value
        const rate = data.rates[currency.toUpperCase()]
          if (rate !== undefined){

            document.querySelector('#result').innerHTML = `1 USD = ${rate.toFixed(3)} ${currency.toUpperCase()}`
          }
          else{
            document.querySelector('#result').innerHTML = 'inValid currency'
          }
        })
        .catch(error => {
          console.log('error: ', error)
        })
        return false
    }

    
})
