import express from "express";
import { PrismaClient } from "@prisma/client/extension";
const app = express();

const client = new PrismaClient();

//Create
app.post("/budget", (req, res) => {
    res.send("creating a budget")
})

// get all budget
app.get("/budget", (req, res) => {
    res.send("getting all the budget")
})
// get a single budget
app.get("/budget/:item", (req, res) => {
    res.send("getting a single budget")
})
//update a budget
app.patch("/budget/:item", (req, res) => {
    res.send("updating a single budget")
})
//deleting a contact
app.delete("/budget/:item", (req, res) => {
    res.send("deleting a single budget")
})

app.listen(4000, ()=>{
    console.log("App is running on port 4000")
})
// id, item, quantity, price,

