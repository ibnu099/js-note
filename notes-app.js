//DOM Document Object Model
const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#btn-create').addEventListener('click', function(e){
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault() //prevent default proses, refresh broweser and put input in url
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })



//Query and Remove
//const p = document.querySelector('p')
// console.log(p)
//p.remove()

/*
//Query All and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p){
    //console.log(p.textContent)
    //p.remove()
    p.textContent = "*********"
})

// Add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)*/