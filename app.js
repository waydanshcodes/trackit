const express = require("express")
const app = express()
const port = 3000
const path = require("path")
const ejsMate = require("ejs-mate")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))
app.engine("ejs", ejsMate)

let activities = []

app.get("/", (req, res) => {
    res.render("homepage.ejs")
})

app.post("/", (req, res) => {
    let newActivity = req.body.activity
    activities.push(newActivity)
    res.render("homepaje.ejs", { activities })
})

app.listen(port, () => {
    console.log("yeah listening")
})