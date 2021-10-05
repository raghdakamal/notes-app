/*const fs = require('fs')

fs.writeFileSync('notes.txt','hello')

console.log(fs.readFileSync('notes.txt').toString())

fs.appendFileSync("notes.txt",' raghda');
console.log(fs.readFileSync('notes.txt').toString())

const x= require('./data')
console.log(x);

console.log(x.name1);
console.log(x.lastName);
console.log(x.sum(10,9));


var validator = require("validator");
 
console.log(validator.isEmail("raghda@gmail.com"))
*/
/*
console.log(process.argv);

const command = process.argv[2]

if (command == 'add'){
    console.log('add item');
}
else if(command == 'delete')
{
    console.log('delete item');
}
*/

/*const yargs = require('yargs')

yargs.command({
    command : 'add',
    describe: 'add notes',
    builder:{
        title:{
            describe:'this is description',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is description',
            type:'string'
        }
    },
    handler:(argv) =>{
        console.log('adding notes title',argv.title);
        console.log('adding notes body',argv.body);

    }
})

yargs.command({
    command : 'delete',
    describe: 'delete notes',
    builder:{
        title:{
            describe:'this is description',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        console.log('delete this note',argv.title);

    }
})
yargs.command({
    command : 'read',
    describe: 'read notes',
    builder:{
        title:{
            describe:'this is description',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        console.log('read notes title',argv.title);

    }
})

yargs.command({
    command : 'list',
    describe: 'list notes',
    handler:(argv) =>{
        console.log('list noteeeee',argv.title);
    }
})
//console.log(yargs.argv);
yargs.parse();*/

const notes=require('./notes');
const yargs = require('yargs')

yargs.command({
    command : 'add',
    describe: 'add notes',
    builder:{
        title:{
            describe:'this is description',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is description',
            type:'string'
        }
    },
    handler:(argv) =>{
        notes.addNote(argv.title,argv.body)

    }
})
//removenote
yargs.command({
    command : 'delete',
    describe: 'delete notes',
    builder:{
        title:{
            describe:'this is description',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        notes.removeNotes(argv.title)

    }
})
//////////
yargs.command({
    command : 'read',
    describe: 'read notes',
    builder:{
        title:{
            describe:'this is description',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        notes.readNotes(argv.title)
  
    }
})


yargs.parse()