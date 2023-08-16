const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];
async function getEmoje() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=2f8f3a587dd1ee75c12e9432af07b90baa334160");
    const data = await response.json();
    // console.log(data);
    for (let i = 0; i < 1500; i++) {      //1500 is the number of emoji we need
        emoji.push({
            emojiImg: data[i].character,
            emojiName: data[i].unicodeName,
        });
    }
}
getEmoje();
btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 1500);
    btnEl.innerText = emoji[randomNum].emojiImg;
    emojiNameEl.innerText = emoji[randomNum].emojiName;

});