const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#btn-remove')
const lastElement = document.querySelector('#note-last')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

if (note === undefined){
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastElement.textContent = generatelastEdited(note.updatedAt)

titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastElement.textContent = generatelastEdited(note.updatedAt)
    saveNotes(notes)   
})

bodyElement.addEventListener('input', function (e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastElement.textContent = generatelastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', function(){
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        lastElement.textContent = generatelastEdited(note.updatedAt)

    }
})