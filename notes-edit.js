'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#btn-remove')
const lastElement = document.querySelector('#note-last')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note){
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastElement.textContent = generatelastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastElement.textContent = generatelastEdited(note.updatedAt)
    saveNotes(notes)   
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastElement.textContent = generatelastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', () => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)

        if (!note) {
            location.assign('/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        lastElement.textContent = generatelastEdited(note.updatedAt)

    }
})