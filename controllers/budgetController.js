const express = require("express");

// router in charge of all routes
// for this resource; Seperation of concerns
const budget = express.Router();

// mock DB
const budgetData = require("./models/budgetLogs");

budget.get("/", (req, res) => {
    console.log("sending budget data")
    res.json(budgetData);
})

// bookmakrs/anything we can think of 
// what does this route need to DO in order to send back
// ONE specific item from our Data?
// the ':' signals express that this is meant to be dynamic
// and anything after the ":" is a variable OF that name
budget.get("/:index", (req, res) => {
    const { index } = req.params;
    console.log("Show Route")
    if (budgetData[index]) {
        res.sendStatus(200).json(budgetData[index])
    } else {
        res.sendStatus(404).send("Nothing at that index");
    }
})
// POST is fired
budget.post("/", (req, res) => {
    console.log("post route was hit");
    console.log(req.body, "this is the req from user")
    budgetData.push(req.body);
    res.status(200).json( {status: "OK", payload: budgetData
    [budgetData.length -1]})

})

// Delete Route 
budget.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (budgetData[arrayIndex]){
        const deletedBudget = budgetData.splice(arrayIndex, 1)
        res.status(200).json(deletedBudget[0])
    } else {
        res.status(404).json({error: "Can't locate item to be deleted"})
    }
})

// Update Route 
budget.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (budgetData[arrayIndex]){
        budgetData[arrayIndex] = req.body
    } else {
        res.status(404).json({error: "Couldn't locate item to be updated"})
    }
})

module.exports = budget;
