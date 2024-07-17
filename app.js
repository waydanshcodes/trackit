const express = require("express")
const app = express()
const port = 3000
const path = require("path")
const ejsMate = require("ejs-mate")
const mongoose = require("mongoose")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))
app.engine("ejs", ejsMate)

let tasks = []

app.get("/", (req, res) => {
    res.render("homepage.ejs")
})

app.post("/", (req, res) => {
    let newTask = req.body.task
    tasks.push(newTask)
    newTask = null
    res.render("tasks.ejs", { tasks })
})
app.listen(port, () => {
    console.log("yeah listening")
})