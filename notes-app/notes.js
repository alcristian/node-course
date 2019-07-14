const fs = require('fs')
const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(title,body){
    const notes = loadNotes()

    const duplicateNote = notes.filter(function(x){
        return x.title===title
    })

    if (duplicateNote.length ===0){
        notes.push({
            title:title, 
            body:body
        })
        saveNotes(notes)
        console.log('New note added ')
    }else {
        console.log('Note title taken')
    }
    
}

const loadNotes = function(){
    try{
        //return array of getNotes
        const dataBuffer = fs.readFileSync('notes_data.json')
        const dataJason = dataBuffer.toString()
        return JSON.parse(dataJason)
    }catch(e){
        return []//return an empty array
    }
}

//arguments will be an array
const saveNotes = function(notes){
    const saveNote = JSON.stringify(notes)
    fs.writeFileSync('notes_data.json',saveNote)

}

const removeNotes = function(title){
    const notes = loadNotes()
    const findNote = notes.filter(function(x){
        return x.title != title
    })
    saveNotes(findNote)
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNotes: removeNotes
}   