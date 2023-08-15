const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");   //div which contain the textarea & button

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");    //convert from string to js object
    //getItem return array with the specified key
}
function createNoteEl(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");      // give the created textarea class name of note (to use in css file)
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
            deleteNote(id, element);
        }
    })

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    })
    return element;
}
getNotes().forEach(element => {
    const noteEl = createNoteEl(element.id, element.content);
    appEl.insertBefore(noteEl, btnEl);  //create a new textarea before the button
});
function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];    //contain single note object    
    //filter used to return array contain the note which meet the condition
    target.content = content;
    saveNote(notes);
}
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id); // contain all notes objects that meet the condition
    saveNote(notes);
    appEl.removeChild(element);

}



function saveNote(notes) {
    return localStorage.setItem("note-app", JSON.stringify(notes));
}

function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100),
        content: "",
    }
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);
    saveNote(notes);
}


btnEl.addEventListener("click", addNote);