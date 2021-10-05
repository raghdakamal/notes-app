const fs= require('fs');

const addNote =(title,body) =>{

    const notes=loadNotes()
    const duplicatetitle= notes.filter((obj)=>{
        return obj.title === title
    })
    if (duplicatetitle.length === 0){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('saved successfully');
    }
    else{
        console.log('duplicate title error');
    }
   
  
}

const loadNotes = () =>{
    try {const dataBuffer= fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)
}

catch(e){
    return []
}}

const saveNotes = (notes) => {
    const saveData= JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}


/////////////

const removeNotes=(title) =>{
    const notes=loadNotes()

    const notesToKeep = notes.filter((note) => {
    return note.title !== title
})
saveNotes (notesToKeep)
console.log('removed')

}
///////////
const readNotes=(title) =>{
    const notes=loadNotes()

    const notesToRead = notes.find((note) => {
    return note.title == title
    
})
saveNotes (notesToRead)
console.log('reading note')

}
////////////

const listNotes=(title) =>{
    const notes=loadNotes()

 


}



module.exports={
    addNote,
    removeNotes,
    readNotes
}