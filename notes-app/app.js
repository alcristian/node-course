const chalk = require('chalk')//package
const yargs = require('yargs')
const noteUtils = require('./notes.js')

//add
yargs.command({
    command:'add', 
    describe: 'Add a new note', 
    builder: {
        title:{
            describe:'Note Title', 
            demandOption : true, 
            type : 'string'
        },
        body:{
            describe:'Body Note', 
            demandOption : true, 
            type : 'string'
        }

    },
    handler(argv){noteUtils.addNote(argv.title, argv.body)}
})

//remove notes
yargs.command({
    command:'remove', 
    describe: 'Remove Notes from notes_data.json', 
    builder:{
        title:{
            describe:'Note title', 
            demandOption : true, 
            type : 'string'
        }
    },
    // handler:(argv)=>noteUtils.removeNotes(argv.title)
    handler(argv){noteUtils.removeNotes(argv.title)}


})

//list notes
yargs.command({
    command:'list', 
    describe: 'list Notes', 
    handler: ()=>{noteUtils.listNotes()}
})

//read notes
yargs.command({
    command:'read', 
    describe: 'Read Notes', 
    handler(argv){noteUtils.readNote(argv.title)}


})
yargs.parse()

//console.log(yargs.argv)
/*
if (command === 'add'){
    console.log('Adding note')
} else if (command === 'remove'){
    console.log('Removing notes')
}
console.log(chalk.bold.inverse.red('teste'));
console.log(getNotes())
console.log(process.argv[2])*/