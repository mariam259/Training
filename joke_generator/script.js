async function getJoke() {
    jokeEl.innerHTML = "Updating...";
    // we add this message to show until we fetch our data

    btnEl.disapled = true;
    btnEl.innerHTML = "Loading";
    // change the text inside button when loading the data from API
    const response = await fetch(apiURL, options);
    // we use await to wait until we get our response
    //we need to convert this response to json so that we can use our data
    const data = await response.json();
    //we wait here until our data transfer to json
    jokeEl.innerHTML = data[0].joke;
    btnEl.disapled = false;
    btnEl.innerHTML = "Tell me a joke";
}
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "fNLCCtHUaPGzpPjxCnC4gw==y1CEmtyDDDA0dQMf";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}


btnEl.addEventListener("click", getJoke);
