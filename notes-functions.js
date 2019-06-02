//Read exisiting notes from localstorage
const getSavedNotes = function () {
    const notesJason = localStorage.getItem('notes')

    if (notesJason !== null) {
        return JSON.parse(notesJason)
    }else{
        return []
    }
}

//save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//remove note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id 
    })

    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    //setup the remove button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function (){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'unnamed note'
    }  
    noteEl.appendChild(textEl)
    textEl.setAttribute('href', `edit.html#${note.id}`)

    return noteEl
}

//Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Generate the last edited messages
const generatelastEdited = function(timestampe){
    return `Last edited ${moment(timestampe).fromNow()}`
}