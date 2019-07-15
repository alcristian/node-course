const fs = require('fs')
const chalk = require('chalk')//package

const getNotes = function(){
    return 'Your notes...'
}

const addNote = (xTitle,xBody) => {
    const notes = loadNotes()
    // if (notes.filter((x) => x.title === xTitle).length===0){
    if (!notes.find((x) => x.title === xTitle)){

        notes.push({
            title:xTitle, 
            body:xBody
        })
        
        saveNotes(notes)
        console.log('New note added ')
    }else{
        console.log('Note title taken')
    }

    // const duplicateNote = notes.filter(function(x){
    //     return x.title===title
    // })
    // if (duplicateNote.length ===0){
    //     notes.push({
    //         title:title, 
    //         body:body
    //     })
    //     saveNotes(notes)
    //     console.log('New note added ')
    // }else {
    //     console.log('Note title taken')
    // }
    
}

const loadNotes = ()=>{
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
const saveNotes = (notes)=>{
    const saveNote = JSON.stringify(notes)
    fs.writeFileSync('notes_data.json',saveNote)

}

const removeNotes = (title)=>{
    const notes = loadNotes()
    // const noteToSave = notes.filter(function(x){ //will excecute this function for all itens of array(notes)
    //     return x.title != title
    // })

    if (notes.length != notes.filter((x) => x.title != title).length ){
        saveNotes(notes.filter((x) => x.title != title))
        console.log(chalk.bold.inverse.red('Note removed!!'))   
    }else {
        console.log(chalk.bold.green('No note found!!'))
    }
    // if (notes.length != noteToSave.length){
    //     console.log(chalk.bold.inverse.red('Note removed!!'))
    // }else {
    //     console.log(chalk.bold.green('No note found!!'))
    // }

    // saveNotes(noteToSave)
}

const listNotes = ()=>{
    const notes=loadNotes()
    console.log('Your notes ')    
    notes.forEach((x)=>{console.log(x.title)})
}

const readNote = (xTitle)=>{
    const notes=loadNotes()
    
    try{
        const noteToRead = notes.find((x) => x.title === xTitle).body
        console.log(noteToRead)
    } catch(e){
        console.log('Unable to find')
    }
    
    // notes.find((x) => x.title === xTitle).body
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes, 
    readNote: readNote
}   