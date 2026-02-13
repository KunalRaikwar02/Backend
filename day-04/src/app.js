const express = require("express")

const app = express() /*server create ho jata hai */

app.use(express.json())

const notes = [
    // {
    //     title:"text title 1",
    //     description: "test description 1"
    // }
]


app.get("/", (req,res)=>{
    res.send("hello world")
})

/* 
Post /notes
*/
app.post ("/notes", (req,res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})

/* 
Get /notes
*/
app.get("/notes", (req,res)=>{
    res.send(notes)
})

/*Delete /notes/5  */
/* params*/
app.delete("/notes/:index",(req,res) => {
    delete notes[ req.params.index ]

    res.send("note deleted successgully")
})

/*Patch /notes/:index */
/* req.body = {description :- "sample modified description."} */
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send("Note updated successfully")
})

module.exports = app