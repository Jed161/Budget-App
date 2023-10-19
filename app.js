// Dependencies
const express = require("express");
const budgetData = require("./models/budgetLogs")
const cors = require("cors");
const budget = require("./controllers/budgetController");

// Configuration
const app = express();

// Middleware
app.use(cors("cors"))
app.use(express.json());
app.use("/budget", budget)

// Routes
app.get("/", (req, res) => {
    res.send(`Welcome to James's App.`)
})

app.get("/budgetData/awesome", (req, res) => {
    res.send(`<h1>A budget is useful</h1>`)
})

// Index Route
app.get("/budgetData", (req, res) => {
    res.send(budgetData)
})

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;
