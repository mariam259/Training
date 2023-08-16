const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");

const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");
updateRate();
function updateRate() {
    //console.log("called");
    fetch(`https://v6.exchangerate-api.com/v6/83f99aef9726da105792d5c8/latest/${currencyFirstEl.value}`).
        then((res) => res.json()).then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value];
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = 
                ${rate + " " + currencySecondEl.value}`;
            worthSecondEl.value = (worthFirstEl.value * rate);
        });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);