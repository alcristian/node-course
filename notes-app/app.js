const chalk = require('chalk')//package
const yargs = require('yargs')
const getNotes = require('./notes.js')

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
    handler: function(argv){
        console.log('Title: ', argv.title, argv.body)
    }
})

//remove notes
yargs.command({
    command:'remove', 
    describe: 'Remove Notes', 
    handler: function(){
        console.log('Removing the note')
    }
})

//list notes
yargs.command({
    command:'list', 
    describe: 'list Notes', 
    handler: function(){
        console.log('Listing notes')
    }
})

//read notes
yargs.command({
    command:'read', 
    describe: 'Read Notes', 
    handler: function(){
        console.log('Read the notes')
    }
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