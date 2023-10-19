// Dependencies
const express = require("express");
const budgetData = require("./models/budgetLogs")
const cors = require("cors")

// Configuration
const app = express();

// Middleware
app.use(cors("cors"))
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send(`Welcome to James's App.`)
})

// Index Route
app.get("/budgetData", (req, res) => {
    res.send(budgetData)
})

app.get("/budgetData/awesome", (req, res) => {
    res.send(`<h1>A budget is useful</h1>`)
})

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;
