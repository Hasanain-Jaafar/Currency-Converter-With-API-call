//  DOM SELECTORS
const apiLink = "https://v6.exchangerate-api.com/v6/0505a2bd83c02714750d4b91/latest/";

function convertCurrency() {
  const amount = document.querySelector(".amount").value;
  const from = document.querySelector(".from").value;
  const to = document.querySelector(".to").value;
  const resultWrapper = document.querySelector(".result-wrapper");
  const resultHeading = document.querySelector(".result-heading");
  const resultDiv = document.querySelector(".result");
  if (amount && from && to) {
    fetch(`${apiLink}${from}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const rate = data.conversion_rates[to];
        const result = (amount * rate).toFixed(2);
        resultWrapper.classList.remove('hidden');
        resultHeading.classList.remove('hidden');
        resultDiv.innerHTML = `${amount} ${from} = ${result} ${to}`
    }).catch((error) =>{
        resultDiv.innerHTML = `Conversion operatio has failed ${error}`;
        
    });
} else {
    resultDiv.innerHTML = "Please Fill All Fields";
    resultHeading.classList.add('hidden');
    resultWrapper.classList.remove('hidden');
  }
}
