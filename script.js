const secondTextInput = document.getElementById('converted-value')
const amountInput = document.getElementById('amount')
const currencyOneOption = document.getElementById('currency-one')
const currencyTwoOption = document.getElementById('converted-value')

const getData = () => {
    const currencyOneValue = document.getElementById('currency-one').value
    const currencyTwoValue = document.getElementById('currency-two').value
    const amountInputValue = document.getElementById('amount').value
    const enteredAmount = `${amountInputValue}` + ".00"
        fetch(`https://v6.exchangerate-api.com/v6/db501f38a742a32b5fe1b78b/pair/${currencyOneValue}/${currencyTwoValue}/${amountInputValue}`+".00").then((response) => {
            response.json().then((data) => {
                console.log(data)
                const conversionRate = data.conversion_rate
                const conversionResult = data.conversion_result
                secondTextInput.value = conversionResult
            })
        })
}

amountInput.addEventListener('input', getData)
currencyOneOption.addEventListener('change', getData)
currencyTwoOption.addEventListener('change', getData)

getData()