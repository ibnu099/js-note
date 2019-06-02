//DOM Document Object Model
let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#btn-create').addEventListener('click', function(e){
    location.assign('/edit.html')
    const id = uuidv4()
    const timestampe = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestampe,
        updatedAt: timestampe
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
