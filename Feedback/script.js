const ratingEls = document.querySelectorAll(".rating");     // querySelectorAll used to select all elements with the name of class 
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";

//forEach method to select each element of our query selector
//then we add event listener to each element
ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {

        selectedRating = event.target.innerText || event.target.parentNode;     //name of your element or name of your parent
        removeActive();
        event.target.classList.add("active");
        // classList to return the name of class in css (rating) 
        //then apply the style of active class
        event.target.parentNode.classList.add("active");
    })
})

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}

btnEl.addEventListener("click", () => {
    if (selectedRating != "") {
        containerEl.innerHTML = `
            <strong>Thank you!</strong>
            <br><br>
            <strong>Feedback: ${selectedRating}</strong>
        `
    }
})
